// 模拟数据 - 需求工单列表
const mockWorkOrders = [
    {
        id: "REQ20260401001",
        coreContent: "用户行为数据分析需求",
        coverage: "全平台用户",
        timeRange: "2026-04-01 至 2026-06-30",
        coreFields: "用户ID、行为类型、页面路径、停留时长、设备信息",
        deliveryFreq: "T+1",
        budget: "10-20万",
        compliance: "数据脱敏、访问审计",
        remark: "需要支持实时查询和历史数据分析，数据保留6个月",
        status: "sourcing",
        creator: "张三",
        createTime: "2026-04-01 10:00",
        updateTime: "2026-04-01 15:30",
        timeline: [
            {
                time: "2026-04-01 10:00",
                user: "张三",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-04-01 11:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-04-01 14:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            }
        ]
    },
    {
        id: "REQ20260331002",
        coreContent: "销售业绩统计报表数据",
        coverage: "销售部全员",
        timeRange: "2026-04-01 至 2026-12-31",
        coreFields: "销售额、订单量、客户数、转化率、环比增长",
        deliveryFreq: "每日",
        budget: "5-10万",
        compliance: "数据权限控制",
        remark: "需要支持按团队、个人、产品线多维度统计",
        status: "submitted",
        creator: "王五",
        createTime: "2026-03-31 16:20",
        updateTime: "2026-03-31 16:20",
        timeline: [
            {
                time: "2026-03-31 16:20",
                user: "王五",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "REQ20260330003",
        coreContent: "客户画像标签数据",
        coverage: "全量客户",
        timeRange: "2026-04-01 至 2026-09-30",
        coreFields: "客户ID、标签类型、标签值、更新时间",
        deliveryFreq: "T+1",
        budget: "20-30万",
        compliance: "数据脱敏、访问审计、权限审批",
        remark: "用于精准营销和客户分群，需要与CRM系统对接",
        status: "accepted",
        creator: "赵六",
        createTime: "2026-03-30 09:15",
        updateTime: "2026-03-30 14:00",
        timeline: [
            {
                time: "2026-03-30 09:15",
                user: "赵六",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-30 14:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            }
        ]
    },
    {
        id: "REQ20260328004",
        coreContent: "订单交易明细数据",
        coverage: "近3年订单",
        timeRange: "2026-04-01 至 2026-06-30",
        coreFields: "订单号、商品明细、金额、支付方式、优惠信息",
        deliveryFreq: "实时",
        budget: "15-25万",
        compliance: "数据加密、访问审计",
        remark: "支持财务对账和交易分析",
        status: "completed",
        creator: "李四",
        createTime: "2026-03-28 14:30",
        updateTime: "2026-04-02 10:00",
        timeline: [
            {
                time: "2026-03-28 14:30",
                user: "李四",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-28 16:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-29 09:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            },
            {
                time: "2026-04-02 10:00",
                user: "数据中台",
                action: "寻源完成",
                status: "completed",
                icon: "fa-check-double"
            }
        ]
    },
    {
        id: "REQ20260325005",
        coreContent: "财务流水数据对接",
        coverage: "全量财务数据",
        timeRange: "2026-04-01 至 2026-12-31",
        coreFields: "流水号、收支类型、金额、账户、时间、摘要",
        deliveryFreq: "实时",
        budget: "30-50万",
        compliance: "数据加密、访问审计、审批流程、合规审查",
        remark: "需要与财务系统实时对接，支持自动对账",
        status: "completed",
        creator: "张三",
        createTime: "2026-03-25 11:00",
        updateTime: "2026-03-30 17:30",
        timeline: [
            {
                time: "2026-03-25 11:00",
                user: "张三",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-25 14:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-26 09:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            },
            {
                time: "2026-03-30 17:30",
                user: "数据中台",
                action: "寻源完成",
                status: "completed",
                icon: "fa-check-double"
            }
        ]
    },
    {
        id: "REQ20260320006",
        coreContent: "历史数据迁移需求",
        coverage: "2020-2025历史数据",
        timeRange: "2026-03-20 至 2026-04-15",
        coreFields: "用户信息、订单数据、交易记录",
        deliveryFreq: "一次性",
        budget: "5万以内",
        compliance: "数据脱敏",
        remark: "旧系统数据迁移到新数据平台",
        status: "closed",
        creator: "王五",
        createTime: "2026-03-20 10:30",
        updateTime: "2026-03-28 14:00",
        timeline: [
            {
                time: "2026-03-20 10:30",
                user: "王五",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-20 15:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-21 09:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            },
            {
                time: "2026-03-27 16:00",
                user: "数据中台",
                action: "寻源完成",
                status: "completed",
                icon: "fa-check-double"
            },
            {
                time: "2026-03-28 14:00",
                user: "王五",
                action: "需求关闭",
                status: "closed",
                icon: "fa-times-circle"
            }
        ]
    },
    {
        id: "REQ20260327007",
        coreContent: "运营活动效果分析数据",
        coverage: "近期活动用户",
        timeRange: "2026-04-01 至 2026-04-30",
        coreFields: "活动ID、参与用户、转化率、ROI、渠道来源",
        deliveryFreq: "T+1",
        budget: "5-10万",
        compliance: "数据脱敏",
        remark: "用于评估运营活动效果，优化活动策略",
        status: "submitted",
        creator: "李四",
        createTime: "2026-03-27 15:45",
        updateTime: "2026-03-27 15:45",
        timeline: [
            {
                time: "2026-03-27 15:45",
                user: "李四",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "REQ20260326008",
        coreContent: "用户留存分析数据",
        coverage: "新注册用户",
        timeRange: "2026-04-01 至 2026-06-30",
        coreFields: "用户ID、注册时间、登录频次、活跃度、留存天数",
        deliveryFreq: "每周",
        budget: "10-15万",
        compliance: "数据脱敏、访问审计",
        remark: "分析用户留存情况，支持产品优化决策",
        status: "sourcing",
        creator: "赵六",
        createTime: "2026-03-26 11:20",
        updateTime: "2026-03-30 10:15",
        timeline: [
            {
                time: "2026-03-26 11:20",
                user: "赵六",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-27 09:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-28 14:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            }
        ]
    },
    {
        id: "REQ20260325009",
        coreContent: "商品库存数据同步",
        coverage: "全量SKU",
        timeRange: "2026-04-01 至 2026-12-31",
        coreFields: "SKU编码、库存数量、仓库位置、预警阈值",
        deliveryFreq: "实时",
        budget: "8-12万",
        compliance: "数据权限控制",
        remark: "实时同步各仓库库存数据，支持库存预警",
        status: "completed",
        creator: "张三",
        createTime: "2026-03-25 09:30",
        updateTime: "2026-03-29 17:00",
        timeline: [
            {
                time: "2026-03-25 09:30",
                user: "张三",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-25 11:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-26 09:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            },
            {
                time: "2026-03-29 17:00",
                user: "数据中台",
                action: "寻源完成",
                status: "completed",
                icon: "fa-check-double"
            }
        ]
    },
    {
        id: "REQ20260324010",
        coreContent: "供应链数据对接",
        coverage: "供应商数据",
        timeRange: "2026-04-01 至 2026-09-30",
        coreFields: "供应商ID、供货周期、质量评分、价格变动",
        deliveryFreq: "每日",
        budget: "20-30万",
        compliance: "数据加密、访问审计、审批流程",
        remark: "对接供应商系统，实现供应链数据可视化",
        status: "closed",
        creator: "王五",
        createTime: "2026-03-24 14:00",
        updateTime: "2026-03-27 16:30",
        timeline: [
            {
                time: "2026-03-24 14:00",
                user: "王五",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-24 16:00",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            },
            {
                time: "2026-03-25 09:00",
                user: "数据中台",
                action: "开始寻源",
                status: "sourcing",
                icon: "fa-search"
            },
            {
                time: "2026-03-26 17:00",
                user: "数据中台",
                action: "寻源完成",
                status: "completed",
                icon: "fa-check-double"
            },
            {
                time: "2026-03-27 16:30",
                user: "王五",
                action: "需求关闭",
                status: "closed",
                icon: "fa-times-circle"
            }
        ]
    },
    {
        id: "REQ20260323011",
        coreContent: "竞品价格监控数据",
        coverage: "主要竞品",
        timeRange: "2026-04-01 至 2026-12-31",
        coreFields: "竞品名称、商品价格、促销信息、库存状态",
        deliveryFreq: "每日",
        budget: "10-15万",
        compliance: "公开数据采集",
        remark: "监控竞品价格变化，支持定价策略",
        status: "submitted",
        creator: "李四",
        createTime: "2026-03-23 16:45",
        updateTime: "2026-03-23 16:45",
        timeline: [
            {
                time: "2026-03-23 16:45",
                user: "李四",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            }
        ]
    },
    {
        id: "REQ20260322012",
        coreContent: "会员积分数据统计",
        coverage: "全量会员",
        timeRange: "2026-04-01 至 2026-06-30",
        coreFields: "会员ID、积分余额、获取记录、消费记录、过期时间",
        deliveryFreq: "T+1",
        compliance: "数据脱敏、访问审计",
        remark: "统计会员积分情况，支持会员运营",
        status: "accepted",
        creator: "赵六",
        createTime: "2026-03-22 10:30",
        updateTime: "2026-03-29 15:20",
        timeline: [
            {
                time: "2026-03-22 10:30",
                user: "赵六",
                action: "提交需求",
                status: "submitted",
                icon: "fa-plus-circle"
            },
            {
                time: "2026-03-29 15:20",
                user: "数据中台",
                action: "已受理",
                status: "accepted",
                icon: "fa-check-circle"
            }
        ]
    }
];

// 交付频率选项
const deliveryFreqOptions = [
    "实时",
    "T+1",
    "每日",
    "每周",
    "每月",
    "一次性"
];

// 预算范围选项
const budgetOptions = [
    "5万以内",
    "5-10万",
    "10-15万",
    "15-20万",
    "20-30万",
    "30-50万",
    "50万以上"
];

// 统计数据
const statistics = {
    submitted: 3,
    accepted: 2,
    sourcing: 2,
    completed: 3,
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
        'submitted': '需求提交',
        'accepted': '已受理',
        'sourcing': '寻源中',
        'completed': '寻源完成',
        'closed': '已关闭'
    };
    return statusMap[status] || status;
}

// 获取状态样式类
function getStatusClass(status) {
    const classMap = {
        'submitted': 'bg-orange-100 text-orange-600',
        'accepted': 'bg-blue-100 text-blue-600',
        'sourcing': 'bg-purple-100 text-purple-600',
        'completed': 'bg-green-100 text-green-600',
        'closed': 'bg-gray-100 text-gray-600'
    };
    return classMap[status] || 'bg-gray-100 text-gray-600';
}

// 获取状态图标
function getStatusIcon(status) {
    const iconMap = {
        'submitted': 'fa-paper-plane',
        'accepted': 'fa-check-circle',
        'sourcing': 'fa-search',
        'completed': 'fa-check-double',
        'closed': 'fa-times-circle'
    };
    return iconMap[status] || 'fa-circle';
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

// 生成需求编号
function generateWorkOrderId() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const num = String(mockWorkOrders.length + 1).padStart(3, '0');
    return `REQ${year}${month}${day}${num}`;
}

// 数据资源详情
const dataResourceDetails = {
    "RES001": {
        code: "RES001",
        name: "企业工商信息数据",
        description: "包含企业基础工商信息、股东信息、对外投资、变更记录等企业信用数据。支持企业尽职调查、风险评估、商业决策等场景。",
        type: "数据集",
        source: "公共数据授权运营服务平台",
        organization: "上海市大数据中心",
        updateFreq: "每日",
        tags: ["工商信息", "企业信用"]
    },
    "RES002": {
        code: "RES002",
        name: "企业纳税信用数据",
        description: "企业纳税信用等级、欠税信息、税务违法记录等纳税相关数据。支持企业信用评估、风险预警等业务场景。",
        type: "数据集",
        source: "公共数据授权运营服务平台",
        organization: "上海市税务局",
        updateFreq: "每月",
        tags: ["纳税", "信用评级"]
    },
    "RES003": {
        code: "RES003",
        name: "公共信用信息数据",
        description: "包含企业及个人的公共信用信息，如行政处罚、荣誉奖励、失信记录等。支持信用查询、合规审查等场景。",
        type: "数据集",
        source: "公共数据授权运营服务平台",
        organization: "上海市发改委",
        updateFreq: "实时",
        tags: ["公共信用", "合规"]
    },
    "RES004": {
        code: "RES004",
        name: "医疗影像标注数据",
        description: "包含CT、MRI、X光等医学影像数据及其专业标注信息。支持AI辅助诊断、医学研究等场景。",
        type: "数据集",
        source: "医疗数据创新实验室",
        organization: "上海交通大学医学院",
        updateFreq: "每周",
        tags: ["医疗影像", "AI诊断"]
    },
    "RES005": {
        code: "RES005",
        name: "临床病历脱敏数据",
        description: "经过严格脱敏处理的临床病历数据，包含诊断、用药、检查结果等信息。支持临床研究、药物研发等场景。",
        type: "数据集",
        source: "医疗数据创新实验室",
        organization: "瑞金医院",
        updateFreq: "每月",
        tags: ["临床数据", "脱敏"]
    },
    "RES006": {
        code: "RES006",
        name: "疾病知识图谱数据",
        description: "包含疾病、症状、药物、检查等医学实体及其关系的大规模知识图谱。支持智能问诊、辅助诊疗等场景。",
        type: "知识图谱",
        source: "医疗数据创新实验室",
        organization: "复旦大学医学院",
        updateFreq: "每季度",
        tags: ["知识图谱", "医学"]
    },
    "RES007": {
        code: "RES007",
        name: "城市人口流动数据",
        description: "基于移动信令的城市人口流动数据，包含区域人口密度、通勤特征、活动轨迹等信息。支持城市规划、商业选址等场景。",
        type: "数据集",
        source: "上海城市可行数据空间",
        organization: "上海市规划资源局",
        updateFreq: "每日",
        tags: ["人口流动", "城市规划"]
    },
    "RES008": {
        code: "RES008",
        name: "交通出行数据",
        description: "包含公共交通客流、道路拥堵、停车资源等城市交通数据。支持交通优化、出行服务等场景。",
        type: "数据集",
        source: "上海城市可行数据空间",
        organization: "上海市交通委",
        updateFreq: "实时",
        tags: ["交通", "出行"]
    },
    "RES009": {
        code: "RES009",
        name: "环境监测数据",
        description: "包含空气质量、水质、噪声等环境监测数据。支持环境评估、健康研究等场景。",
        type: "数据集",
        source: "上海城市可行数据空间",
        organization: "上海市生态环境局",
        updateFreq: "每小时",
        tags: ["环境", "监测"]
    },
    "RES010": {
        code: "RES010",
        name: "企业社保缴纳数据",
        description: "企业社保缴纳情况、员工规模等人力资源相关数据。支持企业信用评估、人力资源分析等场景。",
        type: "数据集",
        source: "公共数据授权运营服务平台",
        organization: "上海市人社局",
        updateFreq: "每月",
        tags: ["社保", "人力资源"]
    }
};

// 资源名称到ID的映射
const resourceNameToId = {
    "企业工商信息数据": "RES001",
    "企业纳税信用数据": "RES002",
    "公共信用信息数据": "RES003",
    "医疗影像标注数据": "RES004",
    "临床病历脱敏数据": "RES005",
    "疾病知识图谱数据": "RES006",
    "城市人口流动数据": "RES007",
    "交通出行数据": "RES008",
    "环境监测数据": "RES009",
    "企业社保缴纳数据": "RES010"
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
