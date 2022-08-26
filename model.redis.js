const redis = require("redis");

const client = redis.createClient({ legacyMode: true });
client.connect().catch((err) => console.log(err));

const get = async (key) => {
   return new Promise((res, rej) => {
      client.get(key, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};
const exists = async (key) => {
   return new Promise((res, rej) => {
      client.exists(key, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};
const set = async (key, count) => {
   return new Promise((res, rej) => {
      client.set(key, count, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};
const setnx = async (key, count) => {
   return new Promise((res, rej) => {
      client.setnx(key, count, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};
const incrby = async (key, count) => {
   return new Promise((res, rej) => {
      client.incrby(key, count, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};
const decrby = async (key, count) => {
   return new Promise((res, rej) => {
      client.decrby(key, count, (err, result) => {
         if (err) return rej(err);
         res(result);
      });
   });
};

module.exports = { get, set, setnx, exists, incrby, decrby, client };
