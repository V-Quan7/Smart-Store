import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "smart-store" });

// inngest function to save user data to a database 
export const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk', },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url,
        };
        await connectDB();
        await User.create(userData);
        console.log('User created:', userData);
    }
)
// inngest function to update user data in a database
export const syncUserUpdation = inngest.createFunction(
    { id: 'sync-user-update-from-clerk', },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url,
        };
        await connectDB();
        await User.findByIdAndUpdate(id, userData);
        console.log('User updated:', userData);
        console.log("MONGODB_URI in Inngest:", process.env.MONGODB_URI);
    }
)


// inngest function to delete user data from a database
export const syncUserDetetion = inngest.createFunction(
    { id: 'sync-user-delete-from-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data;
        await connectDB();
        await User.findByIdAndDelete(id);
        console.log('User deleted:', id);
    }
)