import { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: async () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'caption',
            type: 'text',
        },
    ],
    upload: {

        imageSizes: [
            {
                name: 'thumbnail',
                width: 400,
                height: 300,
                position: 'centre',
            },
            {
                name: 'small',
                width: 600,
                height: 600,
                position: 'centre',
            },
            {
                name: 'medium',
                width: 900,
                height: 900,
                position: 'centre',
            },
            {
                name: 'large',
                width: 1400,
                height: 1400,
                position: 'centre',
            },
        ],
        mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    },
}
