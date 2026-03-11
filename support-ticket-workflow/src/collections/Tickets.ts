import type { CollectionConfig } from 'payload'

export const Tickets: CollectionConfig = {
    slug: 'tickets',

    access: {
        read: () => true,
    },

    admin: {   
        useAsTitle: 'title',
    },

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            options: [
                {
                    label: 'Open',
                    value: 'open',
                },
                {
                    label: 'In Progress',
                    value: 'in-progress',
                },
                {
                    label: 'Closed',
                    value: 'closed',
                },
            ],
            defaultValue: 'open',
        },
        {
            name: 'assignedTo',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
        },
        {
            name: 'comments',
            type: 'relationship',
            relationTo: 'comments',
            hasMany: true,
        }
    ],
}