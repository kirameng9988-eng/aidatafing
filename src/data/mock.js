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
