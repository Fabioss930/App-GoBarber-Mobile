import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";
import reactotronSaga from "reactotron-redux-saga";
import { reactotronRedux } from "reactotron-redux";

declare global {
  interface Console {
    tron: any;
  }
}

interface PluginConfig {
  except?: string[];
}

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler!(AsyncStorage)
    .configure({ host: "192.168.100.2" })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga({ except: [""] }))
    .connect();

  tron.clear!();

  console.tron = tron;
}
