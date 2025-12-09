import type { CollectionConfig } from 'payload';

export const endpoints: CollectionConfig<'contact-requests'>['endpoints'] = [
    {
        path: '/submit',
        method: 'post',
        handler: async req => {
            const payload = req.payload;
            const body = await req?.json?.();

            const error = validateBody(body);
            if (error) {
                return Response.json({ message: error }, { status: 400 });
            }

            await payload.create({
                collection: 'contact-requests',
                data: {
                    name: body.name,
                    email: body.email,
                    message: body.message,
                    surname: body.surname,
                    company: body.company,
                },
            });
            return Response.json(null, { status: 201 });
        },
    },
];

const validateBody = (body: any): string | undefined => {
    if (!body.name || typeof body.name !== 'string' || body.name.trim().length === 0) {
        return 'contact-request-error-01: Missing or invalid name field.';
    }
    if (body.name.length > 64) {
        return 'contact-request-error-02: The name must not exceed 64 characters.';
    }
    if (body.surname.length > 64) {
        return 'contact-request-error-03: The surname must not exceed 64 characters.';
    }
    if (body.company && body.company.length > 64) {
        return 'contact-request-error-04: The company name must not exceed 64 characters.';
    }
    if (!body.email || typeof body.email !== 'string' || body.email.trim().length === 0) {
        return 'contact-request-error-05: The form must include an email address.';
    }
    if (body.message.length > 3000) {
        return 'contact-request-error-06: The message must not exceed 3000 characters.';
    }
    if (body.message.length < 200) {
        return 'contact-request-error-07: The message must contain at least 200 characters.';
    }
};
