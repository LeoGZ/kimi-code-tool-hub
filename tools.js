/**
 * Kimi Code Tool Hub — 工具数据
 *
 * 上架新工具：向 TOOLS 数组追加一条记录即可，无需改动其他文件。
 * 字段说明：
 *   name      工具名称
 *   desc      一句话描述
 *   category  分类（会出现在筛选 pill 中）
 *   tags      搜索标签
 *   stars     GitHub star 数（展示用，手工维护）
 *   icon      卡片图标（emoji）
 *   github    GitHub 仓库地址
 *   featured  是否进入"本周精选"（最多 6 个，按卡片颜色循环展示）
 */
const TOOLS = [
  {
    name: "kimi-cli",
    desc: "Kimi Code 官方命令行工具，在终端里与 Kimi 结对编程。",
    category: "CLI",
    tags: ["cli", "terminal", "official"],
    stars: "12.4k",
    icon: "⌨️",
    github: "https://github.com/MoonshotAI/kimi-cli",
    featured: true,
  },
  {
    name: "git-commit-skill",
    desc: "按项目规范自动生成格式化 commit 信息，支持 JIRA 号与分批提交。",
    category: "Skill",
    tags: ["git", "commit", "workflow"],
    stars: "862",
    icon: "📝",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
  {
    name: "kimi-webbridge",
    desc: "让 Kimi 接管你的真实浏览器：导航、点击、填表、截图全自动。",
    category: "Plugin",
    tags: ["browser", "automation", "web"],
    stars: "3.1k",
    icon: "🌉",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: true,
  },
  {
    name: "codegraph-mcp",
    desc: "MCP 服务：为代码库建立符号级索引，一次调用返回相关源码与调用链。",
    category: "MCP",
    tags: ["mcp", "index", "search"],
    stars: "1.7k",
    icon: "🕸️",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: true,
  },
  {
    name: "dbx-mcp",
    desc: "数据库操作 MCP：执行 SQL、查看表结构、管理连接与 Redis。",
    category: "MCP",
    tags: ["mcp", "sql", "redis", "database"],
    stars: "940",
    icon: "🗄️",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
  {
    name: "ponytail-plugin",
    desc: "反过度工程插件：强制最简可行解，标准库优先，能一行解决就一行。",
    category: "Plugin",
    tags: ["philosophy", "yagni", "review"],
    stars: "2.2k",
    icon: "🐴",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: true,
  },
  {
    name: "skill-creator",
    desc: "从零创建、评测和优化 Kimi Code 技能的脚手架技能。",
    category: "Skill",
    tags: ["skill", "scaffold", "eval"],
    stars: "1.1k",
    icon: "🛠️",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: true,
  },
  {
    name: "domain-modeling",
    desc: "沉淀项目领域模型与统一语言，记录架构决策。",
    category: "Skill",
    tags: ["ddd", "architecture", "docs"],
    stars: "455",
    icon: "🧭",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
  {
    name: "nacos-mcp",
    desc: "Nacos 配置中心 MCP：查询配置、管理命名空间。",
    category: "MCP",
    tags: ["mcp", "nacos", "config"],
    stars: "318",
    icon: "🎛️",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
  {
    name: "minio-mcp",
    desc: "MinIO 对象存储 MCP：bucket 管理、对象上传下载、预签名 URL。",
    category: "MCP",
    tags: ["mcp", "minio", "storage", "s3"],
    stars: "527",
    icon: "🪣",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: true,
  },
  {
    name: "exa-websearch",
    desc: "Exa 联网搜索 MCP：语义搜索网页并抓取正文。",
    category: "MCP",
    tags: ["mcp", "search", "web"],
    stars: "1.9k",
    icon: "🔍",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
  {
    name: "grilling-skill",
    desc: "在动工前对设计方案进行连环追问式压力测试。",
    category: "Skill",
    tags: ["design", "review", "planning"],
    stars: "233",
    icon: "🔥",
    github: "https://github.com/MoonshotAI/kimi-code-tool-hub",
    featured: false,
  },
];
