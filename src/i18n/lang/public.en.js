import store from '../store/store.en';
import cloud from '../cloud/cloud.en';
let pub = {
    /*public*/
    dashboard: "Service Monitor",
    operation: "Operation",
    notice: "Notice",
    user_management: "User Mgr",
    set: "Set",
    /*button*/
    btn_delete: "Delete",
    btn_refresh: "Refresh",
    btn_modify: "Modify",
    btn_create: "Create",
    btn_add: "Add",
    btn_set: "Set",
    btn_start: "Start",
    btn_stop: "Stop",
    btn_lock: "Lock",
    btn_unlock: "Unlock",
    btn_cancel: "Cancel",
    btn_ok: "Ok",
    btn_run: "Run",
    btn_next_step: "Next",
    btn_pre_step: "Back",
    btn_save: "Save",
    // loading
    loading: "Waiting",

    global_task_error: "error{1}(num:{0})",
    global_task_failed: "fail(num:{0})",
    global_task_notexists: "file not exists(num:{0})",
    global_task_tryitlater: "try it later(num:{0})",
    global_task_notdirectory: "is not directory(num:{0})",
    global_task_samedirectory: "is same directory(num:{0})",
    global_task_alreadyexists: "file already exists(num:{0})",
    global_task_theinputsnaprootdir: "snapshot directory is not exist(num:{0})",
    global_task_createdirectory: "create directory fail(num:{0})",
    global_task_directory: "fail to create directory(num:{0})",
    global_task_destinationfile: "fail to operate on goal directory(num:{0})",
    global_task_sourcefile: "fail to operate on source directory(num:{0})",
    global_task_failederrno: "fail,error{1}(num:{0})",
    global_task_exists: "fail(num:{0})",
    //常用
    success_tip: "success",
    fail_tip: "failed",
    has_no_select: "Please select an item!",
    unknow: "unknow",
    path: "path",
    size: "size",
    please_enter_one: "Please enter the {0}!",
    //placeholder
    user_name_placeholder: "Please input user name",
    pwd_placeholder: "Please input password",
    //login
    login: "Login",
    login_error_410: "Session timeout!",
    company_copyright: "LoongStore(Suzhou) Technology Co.,Ltd",
    copyright: "copyright",
    name_pwd_error: " Your account name or password is incorrect",
    service_connect_failed: "Service connection failed",
    not_master_service: "Not master service",
    login_failed: "Logon Failure",
}
export const i18n = {};
Object.assign(i18n, pub, store, cloud)