import Vue from 'vue';
// 按需添加需要用到的组件
import {
    Button,
    Toast,
    Field,
    Form,
    NumberKeyboard,
    Stepper,
    Popup,
    Image,
    Icon,
    Dialog,
    PullRefresh,
    Uploader,
    DatetimePicker,
    Picker,
    Cascader,
    NavBar,
} from 'vant';

Vue.use(Icon);
Vue.use(Button);
Vue.use(Field);
Vue.use(Form);
Vue.use(NumberKeyboard);
Vue.use(Stepper);
Vue.use(Popup);
Vue.use(Image);
Vue.use(PullRefresh);
Vue.use(Uploader);
Vue.use(DatetimePicker);
Vue.use(Picker);
Vue.use(Cascader);
Vue.use(NavBar); 

Vue.prototype.$toast = Toast;
Vue.prototype.$dialog = Dialog;