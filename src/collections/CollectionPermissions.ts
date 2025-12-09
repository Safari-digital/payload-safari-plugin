import type { Access, AccessArgs } from 'payload';

export class CollectionPermissions {
    public static AccessOnAnyone: Access = () => true;
    public static AccessOnAuthenticated: (args: AccessArgs<any>) => boolean = ({ req: { user } }) => Boolean(user);
    public static AccessOnPublished: Access = ({ req: { user } }) =>
        Boolean(user) || { _status: { equals: 'published' } };

    public static Hidden = {
        admin: CollectionPermissions.AccessOnAuthenticated,
        create: CollectionPermissions.AccessOnAuthenticated,
        delete: CollectionPermissions.AccessOnAuthenticated,
        read: CollectionPermissions.AccessOnAuthenticated,
        update: CollectionPermissions.AccessOnAuthenticated,
    };

    public static ReadOnly = {
        create: CollectionPermissions.AccessOnAuthenticated,
        delete: CollectionPermissions.AccessOnAuthenticated,
        read: CollectionPermissions.AccessOnAnyone,
        update: CollectionPermissions.AccessOnAuthenticated,
    };

    public static ReadOnlyAdmin = {
        create: () => false,
        delete: CollectionPermissions.AccessOnAuthenticated,
        read: CollectionPermissions.AccessOnAuthenticated,
        update: () => false,
    };

    public static ReadOnlyPublished = {
        ...CollectionPermissions.ReadOnly,
        read: CollectionPermissions.AccessOnPublished,
    };

    public static StaticValue = {
        admin: () => false,
        create: () => false,
        delete: () => false,
        read: () => true,
        update: () => false,
    };
}
