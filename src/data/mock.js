// 模拟数据 - 工单列表
const mockWorkOrders = [
    {
        id: "WO20260401001",
        title: "用户登录功能优化",
        description: "优化用户登录体验，增加微信、钉钉等第三方登录方式，提升用户登录便捷性和系统安全性。",
        priority: "high",
        status: "processing",
        type: "功能需求",
        creator: "张三",
        assignee: "李四",
        createTime: "2026-04-01 10:00",
        updateTime: "2026-04-01 15:30",
        progress: 60,
        timeline: [
            {
                time: "2026-04-01 10:00",
                user: "张三",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-04-01 14:00",
                user: "李四",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-04-01 15:30",
                user: "李四",
                action: "完成开发",
                status: "processing",
                icon: "fa-code"
            }
        ]
    },
    {
        id: "WO20260401002",
        title: "数据报表导出功能",
        description: "新增数据报表导出功能，支持Excel和PDF格式导出，方便用户进行数据分析。",
        priority: "medium",
        status: "pending",
        type: "功能需求",
        creator: "王五",
        assignee: "赵六",
        createTime: "2026-03-31 16:20",
        updateTime: "2026-03-31 16:20",
        progress: 0,
        timeline: [
            {
                time: "2026-03-31 16:20",
                user: "王五",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "WO20260331003",
        title: "移动端页面适配问题",
        description: "部分页面在iOS设备上显示异常，需要进行兼容性修复。",
        priority: "high",
        status: "processing",
        type: "Bug修复",
        creator: "赵六",
        assignee: "张三",
        createTime: "2026-03-30 09:15",
        updateTime: "2026-03-31 11:20",
        progress: 80,
        timeline: [
            {
                time: "2026-03-30 09:15",
                user: "赵六",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-30 10:00",
                user: "张三",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-31 11:20",
                user: "张三",
                action: "修复完成，等待测试",
                status: "processing",
                icon: "fa-check-circle"
            }
        ]
    },
    {
        id: "WO20260330004",
        title: "首页加载速度优化",
        description: "首页加载时间过长，需要优化数据库查询和前端资源加载。",
        priority: "medium",
        status: "completed",
        type: "性能优化",
        creator: "李四",
        assignee: "王五",
        createTime: "2026-03-28 14:30",
        updateTime: "2026-03-30 16:45",
        progress: 100,
        timeline: [
            {
                time: "2026-03-28 14:30",
                user: "李四",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-29 09:00",
                user: "王五",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-30 16:45",
                user: "王五",
                action: "优化完成",
                status: "completed",
                icon: "fa-check-circle"
            }
        ]
    },
    {
        id: "WO20260329005",
        title: "用户权限管理模块",
        description: "新增用户权限管理功能，支持角色和权限的灵活配置。",
        priority: "high",
        status: "completed",
        type: "功能需求",
        creator: "张三",
        assignee: "李四",
        createTime: "2026-03-25 11:00",
        updateTime: "2026-03-29 17:30",
        progress: 100,
        timeline: [
            {
                time: "2026-03-25 11:00",
                user: "张三",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-26 09:00",
                user: "李四",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-29 17:30",
                user: "李四",
                action: "功能上线",
                status: "completed",
                icon: "fa-check-circle"
            }
        ]
    },
    {
        id: "WO20260328006",
        title: "系统消息通知功能",
        description: "实现系统消息推送功能，支持站内消息和邮件通知。",
        priority: "low",
        status: "closed",
        type: "功能需求",
        creator: "王五",
        assignee: "赵六",
        createTime: "2026-03-20 10:30",
        updateTime: "2026-03-28 14:00",
        progress: 100,
        timeline: [
            {
                time: "2026-03-20 10:30",
                user: "王五",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-22 09:00",
                user: "赵六",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-27 16:00",
                user: "赵六",
                action: "功能完成",
                status: "completed",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-28 14:00",
                user: "系统",
                action: "工单关闭",
                status: "closed",
                icon: "fa-times-circle"
            }
        ]
    },
    {
        id: "WO20260327007",
        title: "数据备份恢复功能",
        description: "增加系统数据自动备份和手动恢复功能，保障数据安全。",
        priority: "medium",
        status: "pending",
        type: "功能需求",
        creator: "李四",
        assignee: "张三",
        createTime: "2026-03-27 15:45",
        updateTime: "2026-03-27 15:45",
        progress: 0,
        timeline: [
            {
                time: "2026-03-27 15:45",
                user: "李四",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "WO20260326008",
        title: "操作日志记录功能",
        description: "记录用户操作日志，支持日志查询和导出。",
        priority: "low",
        status: "processing",
        type: "功能需求",
        creator: "赵六",
        assignee: "王五",
        createTime: "2026-03-26 11:20",
        updateTime: "2026-03-30 10:15",
        progress: 40,
        timeline: [
            {
                time: "2026-03-26 11:20",
                user: "赵六",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-28 14:00",
                user: "王五",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-30 10:15",
                user: "王五",
                action: "数据库设计完成",
                status: "processing",
                icon: "fa-database"
            }
        ]
    },
    {
        id: "WO20260325009",
        title: "批量数据导入功能",
        description: "支持Excel批量导入用户数据和工单数据。",
        priority: "medium",
        status: "completed",
        type: "功能需求",
        creator: "张三",
        assignee: "李四",
        createTime: "2026-03-25 09:30",
        updateTime: "2026-03-28 17:00",
        progress: 100,
        timeline: [
            {
                time: "2026-03-25 09:30",
                user: "张三",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-26 10:00",
                user: "李四",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-28 17:00",
                user: "李四",
                action: "功能上线",
                status: "completed",
                icon: "fa-check-circle"
            }
        ]
    },
    {
        id: "WO20260324010",
        title: "系统界面主题定制",
        description: "支持用户自定义系统主题颜色和布局风格。",
        priority: "low",
        status: "closed",
        type: "功能需求",
        creator: "王五",
        assignee: "赵六",
        createTime: "2026-03-24 14:00",
        updateTime: "2026-03-27 16:30",
        progress: 100,
        timeline: [
            {
                time: "2026-03-24 14:00",
                user: "王五",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-25 09:00",
                user: "赵六",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-26 17:00",
                user: "赵六",
                action: "功能完成",
                status: "completed",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-27 16:30",
                user: "系统",
                action: "工单关闭",
                status: "closed",
                icon: "fa-times-circle"
            }
        ]
    },
    {
        id: "WO20260323011",
        title: "移动端推送通知",
        description: "实现移动端APP推送通知功能。",
        priority: "high",
        status: "pending",
        type: "功能需求",
        creator: "李四",
        assignee: "张三",
        createTime: "2026-03-23 16:45",
        updateTime: "2026-03-23 16:45",
        progress: 0,
        timeline: [
            {
                time: "2026-03-23 16:45",
                user: "李四",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "WO20260322012",
        title: "API接口文档完善",
        description: "完善系统API接口文档，提供详细的接口说明和示例。",
        priority: "medium",
        status: "processing",
        type: "文档完善",
        creator: "赵六",
        assignee: "王五",
        createTime: "2026-03-22 10:30",
        updateTime: "2026-03-29 15:20",
        progress: 70,
        timeline: [
            {
                time: "2026-03-22 10:30",
                user: "赵六",
                action: "创建工单",
                status: "pending",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-24 09:00",
                user: "王五",
                action: "开始处理",
                status: "processing",
                icon: "fa-play-circle"
            },
            {
                time: "2026-03-29 15:20",
                user: "王五",
                action: "文档编写中",
                status: "processing",
                icon: "fa-file-alt"
            }
        ]
    }
];

// 工单类型
const workOrderTypes = [
    "功能需求",
    "Bug修复",
    "性能优化",
    "文档完善",
    "界面优化",
    "其他"
];

// 统计数据
const statistics = {
    pending: 4,
    processing: 4,
    completed: 2,
    closed: 2
};

// 当前用户信息
const currentUser = {
    name: "张三",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    department: "产品部",
    position: "产品经理",
    phone: "138****8888",
    email: "zhangsan@example.com"
};

// 获取工单列表（支持筛选）
function getWorkOrders(status = 'all') {
    if (status === 'all') {
        return mockWorkOrders;
    }
    return mockWorkOrders.filter(item => item.status === status);
}

// 获取单个工单详情
function getWorkOrderById(id) {
    return mockWorkOrders.find(item => item.id === id);
}

// 获取状态文本
function getStatusText(status) {
    const statusMap = {
        'pending': '待处理',
        'processing': '进行中',
        'completed': '已完成',
        'closed': '已关闭'
    };
    return statusMap[status] || status;
}

// 获取状态样式类
function getStatusClass(status) {
    const classMap = {
        'pending': 'bg-red-100 text-red-600',
        'processing': 'bg-blue-100 text-blue-600',
        'completed': 'bg-green-100 text-green-600',
        'closed': 'bg-gray-100 text-gray-600'
    };
    return classMap[status] || 'bg-gray-100 text-gray-600';
}

// 获取优先级文本
function getPriorityText(priority) {
    const priorityMap = {
        'high': '高',
        'medium': '中',
        'low': '低'
    };
    return priorityMap[priority] || priority;
}

// 获取优先级样式类
function getPriorityClass(priority) {
    const classMap = {
        'high': 'bg-red-100 text-red-600',
        'medium': 'bg-yellow-100 text-yellow-600',
        'low': 'bg-blue-100 text-blue-600'
    };
    return classMap[priority] || 'bg-gray-100 text-gray-600';
}

// 格式化时间
function formatTime(timeStr) {
    const date = new Date(timeStr);
    const now = new Date();
    const diff = now - date;
    const hours = Math.floor(diff / (1000 * 60 * 60));

    if (hours < 1) {
        return '刚刚';
    } else if (hours < 24) {
        return `${hours}小时前`;
    } else {
        const days = Math.floor(hours / 24);
        if (days < 7) {
            return `${days}天前`;
        } else {
            return timeStr.split(' ')[0];
        }
    }
}

// 生成工单ID
function generateWorkOrderId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const num = String(mockWorkOrders.length + 1).padStart(3, '0');
    return `WO${year}${month}${day}${num}`;
}

// 数据资源详情
const dataResourceDetails = {
    "RES001": {
        code: "RES001",
        name: "实时线索行为数据",
        description: "用户在产品内的所有行为数据，包括页面浏览、点击、表单提交、按钮点击等全量行为日志。该数据覆盖用户完整的交互路径，支持用户行为分析、转化漏斗分析、用户路径分析等多种分析场景。",
        type: "数据集",
        source: "神策数据",
        organization: "数据中台部",
        updateFreq: "实时",
        tags: ["用户行为", "埋点数据"]
    },
    "RES002": {
        code: "RES002",
        name: "用户画像标签",
        description: "包含用户的基础属性标签、兴趣标签、消费能力标签、行为偏好标签等多维度标签体系。支持用户分群、精准营销、个性化推荐等业务场景。",
        type: "标签数据",
        source: "数据中台",
        organization: "数据中台部",
        updateFreq: "T+1",
        tags: ["用户画像", "标签"]
    },
    "RES003": {
        code: "RES003",
        name: "用户基础信息表",
        description: "用户注册信息、实名认证信息、会员等级、账户状态等核心用户信息。是用户相关的核心主数据，与各业务系统保持同步。",
        type: "主数据",
        source: "CRM系统",
        organization: "客户服务部",
        updateFreq: "实时",
        tags: ["用户信息", "主数据"]
    },
    "RES004": {
        code: "RES004",
        name: "订单交易明细",
        description: "全量订单交易数据，包含订单金额、商品明细、支付方式、优惠信息、订单状态等完整订单信息。支持交易分析、销售统计、财务对账等场景。",
        type: "数据集",
        source: "交易系统",
        organization: "交易结算部",
        updateFreq: "实时",
        tags: ["订单", "交易"]
    },
    "RES005": {
        code: "RES005",
        name: "订单履约数据",
        description: "订单的履约状态、物流信息、签收情况、售后记录等完整履约链路数据。支持履约监控、物流分析、售后服务等业务。",
        type: "数据集",
        source: "履约中台",
        organization: "供应链部",
        updateFreq: "实时",
        tags: ["履约", "物流"]
    },
    "RES006": {
        code: "RES006",
        name: "销售业绩数据",
        description: "销售团队的业绩统计、目标完成率、环比同比数据、业绩排名等销售相关指标。支持销售分析、绩效考核、业绩预测等场景。",
        type: "报表",
        source: "销售BI系统",
        organization: "销售部",
        updateFreq: "每日",
        tags: ["销售", "业绩"]
    },
    "RES007": {
        code: "RES007",
        name: "客户信息数据",
        description: "企业客户档案、联系信息、客户等级、跟进记录、成单历史等客户全生命周期数据。是客户关系管理的核心数据。",
        type: "主数据",
        source: "CRM系统",
        organization: "客户服务部",
        updateFreq: "实时",
        tags: ["客户", "CRM"]
    },
    "RES008": {
        code: "RES008",
        name: "线索转化漏斗",
        description: "从线索获取、线索清洗、商机转化、成交签约的全链路转化数据。支持营销效果分析、转化率优化等场景。",
        type: "报表",
        source: "营销云",
        organization: "市场部",
        updateFreq: "T+1",
        tags: ["线索", "转化"]
    },
    "RES009": {
        code: "RES009",
        name: "财务流水数据",
        description: "全量财务收支流水，包含收入、支出、退款、调账等所有财务变动记录。是财务对账、资金分析的核心数据。",
        type: "数据集",
        source: "财务系统",
        organization: "财务部",
        updateFreq: "实时",
        tags: ["财务", "流水"]
    },
    "RES010": {
        code: "RES010",
        name: "发票管理数据",
        description: "开票记录、发票状态、发票金额、税率、购方信息等发票相关数据。支持发票管理、税务申报等业务场景。",
        type: "数据集",
        source: "税务系统",
        organization: "财务部",
        updateFreq: "每日",
        tags: ["发票", "税务"]
    }
};

// 资源名称到ID的映射
const resourceNameToId = {
    "实时线索行为数据": "RES001",
    "用户画像标签": "RES002",
    "用户基础信息表": "RES003",
    "订单交易明细": "RES004",
    "订单履约数据": "RES005",
    "销售业绩数据": "RES006",
    "客户信息数据": "RES007",
    "线索转化漏斗": "RES008",
    "财务流水数据": "RES009",
    "发票管理数据": "RES010"
};

// 根据ID获取资源详情
function getResourceById(id) {
    return dataResourceDetails[id];
}

// 根据名称获取资源ID
function getResourceIdByName(name) {
    return resourceNameToId[name];
}

// 中文转拼音首字母（简单实现）
function getInitials(name) {
    // 常见汉字拼音首字母映射
    const pinyinMap = {
        '张': 'Z', '李': 'L', '王': 'W', '赵': 'Z', '刘': 'L',
        '陈': 'C', '杨': 'Y', '黄': 'H', '周': 'Z', '吴': 'W',
        '徐': 'X', '孙': 'S', '马': 'M', '朱': 'Z', '胡': 'H',
        '郭': 'G', '何': 'H', '高': 'G', '林': 'L', '罗': 'L',
        '郑': 'Z', '梁': 'L', '谢': 'X', '宋': 'S', '唐': 'T',
        '许': 'X', '韩': 'H', '冯': 'F', '邓': 'D', '曹': 'C',
        '彭': 'P', '曾': 'Z', '萧': 'X', '田': 'T', '董': 'D',
        '袁': 'Y', '潘': 'P', '于': 'Y', '蒋': 'J', '蔡': 'C',
        '余': 'Y', '杜': 'D', '叶': 'Y', '程': 'C', '苏': 'S',
        '魏': 'W', '吕': 'L', '丁': 'D', '任': 'R', '沈': 'S'
    };

    if (!name || name.length === 0) return 'U';

    const firstChar = name.charAt(0);

    // 如果是英文字母，直接返回大写
    if (/[a-zA-Z]/.test(firstChar)) {
        return firstChar.toUpperCase();
    }

    // 如果是汉字，查找映射表
    if (pinyinMap[firstChar]) {
        return pinyinMap[firstChar];
    }

    // 默认返回第一个字符
    return firstChar.toUpperCase();
}

// 退出登录
function logout() {
    if (confirm('确定要退出登录吗？')) {
        alert('已退出登录');
        // 实际项目中应跳转到登录页
        // window.location.href = 'login.html';
    }
}

// 初始化下拉菜单交互
function initDropdownMenus() {
    // 点击账号按钮切换下拉菜单
    document.querySelectorAll('.avatar-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const menu = this.nextElementSibling;
            if (menu && menu.classList.contains('dropdown-menu')) {
                // 关闭其他下拉菜单
                document.querySelectorAll('.dropdown-menu.show').forEach(m => {
                    if (m !== menu) m.classList.remove('show');
                });
                menu.classList.toggle('show');
            }
        });
    });

    // 点击页面其他区域关闭下拉菜单
    document.addEventListener('click', function() {
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initDropdownMenus();
});
