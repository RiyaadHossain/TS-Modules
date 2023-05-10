interface CustomModel<Data extends {}, Methods extends {}> {
  data: Data;
  methods: Methods;
}

interface IUserH {
  firstName: string;
  lastName: string;
}

interface IMethods {
  fullName: () => string;
}

type UserModel = CustomModel<IUserH, IMethods>;

class UserH implements UserModel {
  data: IUserH;
  methods: IMethods;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName() {
        return `${firstName} ${lastName}`;
      },
    };
  }
}
