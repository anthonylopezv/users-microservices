
import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async(): Promise<typeof mongoose> => 
    await mongoose.connect('mongodb://admin:admin2019@ds147436.mlab.com:47436/db-user-service', {
      useNewUrlParser: true,
    })
  }
];