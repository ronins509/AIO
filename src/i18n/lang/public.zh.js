import store from '../store/store.zh';
import cloud from '../cloud/cloud.zh';
let pub = {
    /*public*/
    dashboard: "服务概况",
    operation: "操作",
    notice: "提示",
    user_management: "用户管理",
    set: "设置",
    /*button*/
    btn_delete: "删除",
    btn_refresh: "刷新",
    btn_modify: "修改",
    btn_create: "创建",
    btn_add: "添加",
    btn_set: "配置",
    btn_start: "启动",
    btn_stop: "停止",
    btn_lock: "锁定",
    btn_unlock: "解锁",
    btn_cancel: "取消",
    btn_ok: "确定",
    btn_run: "运行",
    btn_next_step: "下一步",
    btn_pre_step: "上一步",
    btn_save: "保存",
    // loading
    loading: "请稍等",

    global_task_error: "错误{1}(个数:{0})",
    global_task_failed: "失败(个数:{0})",
    global_task_notexists: "文件不存在(个数:{0})",
    global_task_tryitlater: "稍后重试(个数:{0})",
    global_task_notdirectory: "不是目录(个数:{0})",
    global_task_samedirectory: "相同目录(个数:{0})",
    global_task_alreadyexists: "文件已经存在(个数:{0})",
    global_task_theinputsnaprootdir: "快照目录不存在(个数:{0})",
    global_task_createdirectory: "创建目录失败(个数:{0})",
    global_task_directory: "对目录操作失败(个数:{0})",
    global_task_destinationfile: "对目标目录操作失败(个数:{0})",
    global_task_sourcefile: "对原目录操作失败(个数:{0})",
    global_task_failederrno: "失败,错误{1}(个数:{0})",
    global_task_exists: "失败(个数:{0})",
    //常用
    success_tip: "操作成功",
    fail_tip: "操作失败",
    has_no_select: "请选择信息",
    unknow: "未知",
    path: "路径",
    size: "大小",
    please_enter_one: "请输入{0}",
    //placeholder
    user_name_placeholder: "请输入用户名",
    pwd_placeholder: "请输入密码",
    //login
    login: "登录",
    login_error_410: "会话超时！",
    company_copyright: "龙存（苏州）科技有限公司",
    copyright: "版权所有",
    name_pwd_error: "用户名或密码错误",
    service_connect_failed: "服务连接失败",
    not_master_service: "访问的节点不是主管理服务节点",
    login_failed: "登录失败",
}
export const i18n = {};
Object.assign(i18n, pub, store, cloud);
//   i18n