import { CollectionConfig } from 'payload'

export const SupportCategories: CollectionConfig = {
    slug: 'support-categories',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            localized: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: false,
            localized: true,
        },
    ],
    timestamps: true,
}
