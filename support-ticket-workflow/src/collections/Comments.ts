import { CollectionConfig } from "payload";

export const Comments: CollectionConfig = {
    slug: 'comments',

    admin: {
        useAsTitle: 'content',
        group: 'Tickets',
    },
    
    access: {
        read: () => true,
    },

    fields: [
        {
            name: 'content',
            type: 'textarea',
            required: true,

        },
        {
            name: 'author',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
        },
        {
            name: 'ticket',
            type: 'relationship',
            relationTo: 'Tickets',
            hasMany: false,
        }
    ],
}