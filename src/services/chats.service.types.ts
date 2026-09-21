interface CreateBaseChat {
    creatorId: string;
}

type CreatePrivateChat = {
    type: 'private';
    memberId: string;
    membersId?: never;
};

type CreateGroupChat = {
    type: 'group';
    memberId?: never;
    membersId: string[];
};

export type CreateChat = CreateBaseChat & (CreatePrivateChat | CreateGroupChat);