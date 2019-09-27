export class UserModel {
    constructor(
        public rid?: any,
        public login?: string,
        public groupId?: string,
        public queueId?: string,
        public teamId?: string,
        public groupName?: string,
        public queueName?: string,
        public teamName?: boolean,
    ) {

        this.rid = rid ? rid : null;
        this.login = login ? login : null;
        this.groupId = groupId ? groupId : null;
        this.queueId = queueId ? queueId : null;
        this.groupName = groupName ? groupName : null;
        this.teamId = teamId ? teamId : null;
        this.queueName = queueName ? queueName : null;
        this.teamName = teamName ? teamName : null;


    }
}