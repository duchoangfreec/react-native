// import axios from "axios";

// export default class ServiceBase {
//   constructor() {}

//   /**
//    *
//    * @param endpoint
//    * @param queries
//    */
//   public async get<T>(
//     endpoint: string,
//     queries?: { [key in string]?: string },
//     config?: AxiosRequestConfig
//   ) {
//     await $jwt.getVerifiedKeys();
//     const url = queries
//       ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}`
//       : endpoint;
//     console.info("GET:", url, queries);
//     return await axios.get<T>(url, config);
//   }

//   /**
//    *
//    * @param endpoint
//    * @param params
//    * @param queries
//    */
//   public async post<T, U>(
//     endpoint: string,
//     params: U,
//     queries?: { [key in string]: string },
//     config?: AxiosRequestConfig
//   ) {
//     await $jwt.getVerifiedKeys();
//     const url = queries
//       ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}`
//       : endpoint;
//     console.info("POST:", url, params, config);
//     return await axios.post<T>(url, params, config);
//   }

//   /**
//    *
//    * @param endpoint
//    * @param params
//    * @param queries
//    */
//   public async patch<T, U>(
//     endpoint: string,
//     params: U,
//     queries?: { [key in string]: string },
//     config?: AxiosRequestConfig
//   ) {
//     await $jwt.getVerifiedKeys();
//     const url = queries
//       ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}`
//       : endpoint;
//     console.info("PATCH", url, params);
//     return await axios.patch<T>(url, params, config);
//   }

//   /**
//    *
//    * @param endpoint
//    * @param params
//    * @param queries
//    */
//   public async put<T, U>(
//     endpoint: string,
//     params: U,
//     queries?: { [key in string]: string }
//   ) {
//     await $jwt.getVerifiedKeys();
//     const url = queries
//       ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}`
//       : endpoint;
//     console.info("PUT", url, params);
//     return await axios.put<T>(url, params);
//   }

//   /**
//    *
//    * @param endpoint
//    * @param queries
//    */
//   public async delete<T>(
//     endpoint: string,
//     queries?: { [key in string]: string },
//     config?: AxiosRequestConfig
//   ) {
//     await $jwt.getVerifiedKeys();
//     const url = queries
//       ? `${endpoint}?${ServiceBase.encodeQueryData(queries)}`
//       : endpoint;
//     console.info("DELETE", url, queries);
//     return await axios.delete<T>(url, config);
//   }

//   /**
//    * add query parameters to url
//    * @param data
//    */
//   private static encodeQueryData(data: {
//     [key in string]?: string | number | Moment | Date;
//   }) {
//     const ret = [];
//     for (const d in data) {
//       // クエリパラメータをsnakeケースにしたい場合は以下のコメントアウトを解除
//       // const key = encodeURIComponent(ServiceBase.camelToUnderscore(d));
//       const key = encodeURIComponent(d);
//       const param = data[d];
//       if (param && (isMoment(param) || isDate(param))) {
//         const value = encodeURIComponent(param.toJSON());
//         ret.push(key + "=" + value);
//       } else if (param && isArray(param)) {
//         for (let idx = 0; idx < param.length; idx++) {
//           ret.push(`${key}[${idx}]=${encodeURIComponent(param[idx])}`);
//         }
//       } else if (param || param === 0) {
//         const value = encodeURIComponent(param);
//         ret.push(key + "=" + value);2 \

//       }
//     }
//     return ret.join("&");
//   }

//   /**
//    * change naming convention camel to snake
//    * @param key
//    */
//   private static camelToUnderscore(key: string) {
//     return key.replace(/([A-Z])/g, "_$1").toLowerCase();
//   }
// }
