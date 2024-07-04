"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[402],{3132:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>l,metadata:()=>h,toc:()=>t});var n=s(1527),d=s(6225);const l={sidebar_position:1,description:"Learn how to use Yazi's Lua API."},r="Types",h={id:"plugins/types",title:"Types",description:"Learn how to use Yazi's Lua API.",source:"@site/docs/plugins/types.md",sourceDirName:"plugins",slug:"/plugins/types",permalink:"/docs/plugins/types",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/plugins/types.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learn how to use Yazi's Lua API."},sidebar:"docsSidebar",previous:{title:"Plugins (BETA)",permalink:"/docs/plugins/overview"},next:{title:"Layout",permalink:"/docs/plugins/layout"}},c={},t=[{value:"Shared",id:"shared",level:2},{value:"Cha",id:"shared.cha",level:3},{value:"File",id:"shared.file",level:3},{value:"Icon",id:"shared.icon",level:3},{value:"Range",id:"shared.range",level:3},{value:"Url",id:"shared.url",level:3},{value:"Window",id:"shared.window",level:3},{value:"App data",id:"app-data",level:2},{value:"<code>tab::Mode</code>",id:"app-data.tab-mode",level:3},{value:"<code>tab::Config</code>",id:"app-data.tab-config",level:3},{value:"<code>tab::Selected</code>",id:"app-data.tab-selected",level:3},{value:"<code>tab::Preview</code>",id:"app-data.tab-preview",level:3},{value:"<code>folder::Folder</code>",id:"app-data.folder-folder",level:3},{value:"<code>folder::Files</code>",id:"app-data.folder-files",level:3},{value:"<code>folder::File</code>",id:"app-data.folder-file",level:3},{value:"<code>manager::Tabs</code>",id:"app-data.manager-tabs",level:3},{value:"<code>tab::Tab</code>",id:"app-data.tab-tab",level:3},{value:"<code>tasks::Tasks</code>",id:"app-data.tasks-tasks",level:3},{value:"<code>manager::Yanked</code>",id:"app-data.manager-yanked",level:3}];function a(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"types",children:"Types"}),"\n",(0,n.jsx)(i.h2,{id:"shared",children:"Shared"}),"\n",(0,n.jsx)(i.h3,{id:"shared.cha",children:"Cha"}),"\n",(0,n.jsx)(i.p,{children:"Cha means one file's characteristics with the following properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_dir"})," - Whether this file is a directory"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_hidden"})," - Whether this file is hidden (starts with a dot)"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_link"})," - Whether this file is a symlink"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_orphan"})," - Whether this file is a bad symlink, which points to a non-existent file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_block_device"})," - Whether this file is a block device"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_char_device"})," - Whether this file is a character device"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_fifo"})," - Whether this file is a fifo"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_socket"})," - Whether this file is a socket"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_exec"})," - Whether this file is executable"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_sticky"})," - Whether this file has the sticky bit set"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"length"})," - The length of this file, returns an integer representing the size in bytes. Note that it can't reflect the size of a directory, use ",(0,n.jsx)(i.a,{href:"#app-data.folder-file",children:(0,n.jsx)(i.code,{children:"size()"})})," instead"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"created"})," - The created time of this file in Unix timestamp, or ",(0,n.jsx)(i.code,{children:"nil"})," if it doesn't have a valid time"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"modified"})," - The modified time of this file in Unix timestamp, or ",(0,n.jsx)(i.code,{children:"nil"})," if it doesn't have a valid time"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"accessed"})," - The accessed time of this file in Unix timestamp, or ",(0,n.jsx)(i.code,{children:"nil"})," if it doesn't have a valid time"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"permissions"})," - Unix permissions of this file in string, e.g. ",(0,n.jsx)(i.code,{children:"drwxr-xr-x"}),". For Windows, it's always ",(0,n.jsx)(i.code,{children:"nil"})]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"And the Unix only properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"uid"})," - The user id of this file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"gid"})," - The group id of this file"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"shared.file",children:"File"}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"url"})," - The ",(0,n.jsx)(i.a,{href:"#shared.url",children:"Url"})," of this file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cha"})," - The ",(0,n.jsx)(i.a,{href:"#shared.cha",children:"Cha"})," of this file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"link_to"})," - The ",(0,n.jsx)(i.a,{href:"#shared.url",children:"Url"})," of this file pointing to, if it's a symlink; otherwise, ",(0,n.jsx)(i.code,{children:"nil"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"name"})," - The name of this file"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"shared.icon",children:"Icon"}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"text"})," - The text of this icon"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"style"})," - The ",(0,n.jsx)(i.a,{href:"/docs/plugins/layout#style",children:"Style"})," of this icon"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"shared.range",children:"Range"}),"\n",(0,n.jsx)(i.p,{children:"TODO"}),"\n",(0,n.jsx)(i.h3,{id:"shared.url",children:"Url"}),"\n",(0,n.jsx)(i.p,{children:"Create a Url:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-lua",children:'-- regular file\nlocal url = Url("/root/Downloads/logo.png")\n\n-- `bgm.mp3` from the archive `ost.zip`\nlocal url = Url("archive:///root/ost.zip#bgm.mp3")\n'})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"frag"})," - The fragment string of this url. Let's say the url ",(0,n.jsx)(i.code,{children:"archive:///root/my-archive.zip#1.jpg"}),", the fragment ",(0,n.jsx)(i.code,{children:"1.jpg"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_regular"})," - Whether the file represented by this url is a regular file"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_search"})," - Whether the file represented by this url from the search result"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_archive"})," - Whether the file represented by this url from an archive"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"name()"})," - The file name of this url"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"stem()"})," - The file name without the extension of this url"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"join(url)"})," - Join this url with another url"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"parent()"})," - The url of the parent directory"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__eq(another_url)"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__tostring()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__concat(string)"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"shared.window",children:"Window"}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"rows"})," - The number of rows of this window"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cols"})," - The number of columns of this window"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"width"})," - The width of this window in pixels"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"height"})," - The height of this window in pixels"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"app-data",children:"App data"}),"\n",(0,n.jsxs)(i.p,{children:["You can access all app data through the ",(0,n.jsx)(i.code,{children:"cx"})," within ",(0,n.jsx)(i.a,{href:"/docs/plugins/overview#sync-context",children:"Sync context"}),":"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cx.active"})," - The active tab, which is a ",(0,n.jsx)(i.a,{href:"#app-data.tab-tab",children:"tab::Tab"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cx.tabs"})," - All of tabs, which is a ",(0,n.jsx)(i.a,{href:"#app-data.manager-tabs",children:"manager::Tabs"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cx.tasks"})," - All of tasks, which is a ",(0,n.jsx)(i.a,{href:"#app-data.tasks-tasks",children:"tasks::Tasks"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cx.yanked"})," - The yanked urls, which is a ",(0,n.jsx)(i.a,{href:"#app-data.manager-yanked",children:"manager::Yanked"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tab-mode",children:(0,n.jsx)(i.code,{children:"tab::Mode"})}),"\n",(0,n.jsx)(i.p,{children:"Visual mode status."}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_select"})," - Whether the mode is select"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_unset"})," - Whether the mode is unset"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_visual"})," - Whether the mode is select or unset"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__tostring()"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tab-config",children:(0,n.jsx)(i.code,{children:"tab::Config"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sort_by"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sort_sensitive"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sort_reverse"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sort_dir_first"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"sort_translit"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"linemode"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"show_hidden"})}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["These properties are consistent with those in ",(0,n.jsx)(i.a,{href:"/docs/configuration/yazi",children:"yazi.toml"}),", and will not be detailed here."]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tab-selected",children:(0,n.jsx)(i.code,{children:"tab::Selected"})}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__len()"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__pairs()"})," - Iterate over the selected ",(0,n.jsx)(i.a,{href:"#shared.url",children:"Url"}),"s."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tab-preview",children:(0,n.jsx)(i.code,{children:"tab::Preview"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"skip"})," - The number of units to skip. The units largely depend on your previewer, such as lines for code and percentages for videos."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"folder"})," - The ",(0,n.jsx)(i.a,{href:"#app-data.folder-folder",children:"folder::Folder"})," being previewed, or ",(0,n.jsx)(i.code,{children:"nil"})," if this preview is not for folders"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.folder-folder",children:(0,n.jsx)(i.code,{children:"folder::Folder"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cwd"})," - The current working directory of this folder, which is a ",(0,n.jsx)(i.a,{href:"#shared.url",children:"Url"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"offset"})," - The offset of this folder, which is an integer"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"cursor"})," - The cursor position of this folder, which is an integer"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"window"})," - A table of ",(0,n.jsx)(i.a,{href:"#shared.file",children:"File"})," in the visible area of this folder"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"files"})," - The ",(0,n.jsx)(i.a,{href:"#app-data.folder-files",children:(0,n.jsx)(i.code,{children:"folder::Files"})})," of this folder"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"hovered"})," - The hovered ",(0,n.jsx)(i.a,{href:"#shared.file",children:"File"})," of this folder, or ",(0,n.jsx)(i.code,{children:"nil"})," if there is no hovered file"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.folder-files",children:(0,n.jsx)(i.code,{children:"folder::Files"})}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__len()"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__pairs()"})," - Iterate over the ",(0,n.jsx)(i.a,{href:"#shared.file",children:"File"}),"s."]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.folder-file",children:(0,n.jsx)(i.code,{children:"folder::File"})}),"\n",(0,n.jsxs)(i.p,{children:["Based on ",(0,n.jsx)(i.a,{href:"#shared.file",children:"File"}),", with the following additional methods:"]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"size()"})," - The size of this file, returns an integer representing the size in bytes, or ",(0,n.jsx)(i.code,{children:"nil"})," if its a directory and it has not been evaluated"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"mime()"})," - The mime-type of this file, which is a string, or ",(0,n.jsx)(i.code,{children:"nil"})," if it's a directory or hasn't been lazily calculated at all"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"prefix()"})," - The prefix of this file relative to ",(0,n.jsx)(i.code,{children:"CWD"}),", which used in the flat view during search. For instance, if ",(0,n.jsx)(i.code,{children:"CWD"})," is ",(0,n.jsx)(i.code,{children:"/foo"}),", and the file is ",(0,n.jsx)(i.code,{children:"/foo/bar/baz"}),", then the prefix is ",(0,n.jsx)(i.code,{children:"bar/"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"icon()"})," - The ",(0,n.jsx)(i.a,{href:"#shared.icon",children:"Icon"})," of this file, ",(0,n.jsx)(i.a,{href:"/docs/configuration/theme#icon",children:(0,n.jsx)(i.code,{children:"[icon]"})})," rules are applied; if no rule matches, returns ",(0,n.jsx)(i.code,{children:"nil"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"style()"})," - The ",(0,n.jsx)(i.a,{href:"/docs/plugins/layout#style",children:"Style"})," of this file, ",(0,n.jsx)(i.a,{href:"/docs/configuration/theme#filetype",children:(0,n.jsx)(i.code,{children:"[filetype]"})})," rules are applied; if no rule matches, returns ",(0,n.jsx)(i.code,{children:"nil"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_hovered()"})," - Whether this file is hovered"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_yanked()"})," - Whether this file is yanked"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_selected()"})," - Whether this file is selected"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"found()"})," - When users find a file using the ",(0,n.jsx)(i.code,{children:"find"})," command, the status of the file - returns ",(0,n.jsx)(i.code,{children:"nil"})," if it doesn't match the user's find keyword; otherwise, returns ",(0,n.jsx)(i.code,{children:"{idx, all}"}),", where ",(0,n.jsx)(i.code,{children:"idx"})," is the position of matched file, and ",(0,n.jsx)(i.code,{children:"all"})," represents the number of all matched files."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"highlights()"})," - TODO"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.manager-tabs",children:(0,n.jsx)(i.code,{children:"manager::Tabs"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"idx"})," - The index of the active tab"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__len()"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__index(idx)"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tab-tab",children:(0,n.jsx)(i.code,{children:"tab::Tab"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"mode"})," - The ",(0,n.jsx)(i.a,{href:"#app-data.tab-mode",children:"tab::Mode"})," of this tab."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"conf"})," - The ",(0,n.jsx)(i.a,{href:"#app-data.tab-config",children:"tab::Config"})," of this tab."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"current"})," - The current folder within this tab, which is a ",(0,n.jsx)(i.a,{href:"#app-data.folder-folder",children:"folder::Folder"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"parent"})," - The parent folder within this tab, which is a ",(0,n.jsx)(i.a,{href:"#app-data.folder-folder",children:"folder::Folder"})," if ",(0,n.jsx)(i.code,{children:"current"})," has a parent; otherwise, ",(0,n.jsx)(i.code,{children:"nil"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"selected"})," - The selected files within this tab, which is a ",(0,n.jsx)(i.a,{href:"#app-data.tab-selected",children:"tab::Selected"}),"."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"preview"})," - The ",(0,n.jsx)(i.a,{href:"#app-data.tab-preview",children:"tab::Preview"})," within this tab."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"name()"})," - The name of this tab"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.tasks-tasks",children:(0,n.jsx)(i.code,{children:"tasks::Tasks"})}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"progress"})," - The progress of all tasks, which is a table:"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-lua",children:"{\n\t-- Number of tasks\n\ttotal = 0,\n\tsucc  = 0,\n\tfail  = 0,\n\n\t-- Workload of tasks\n\tfound     = 0,\n\tprocessed = 0,\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"app-data.manager-yanked",children:(0,n.jsx)(i.code,{children:"manager::Yanked"})}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-lua",children:"for idx, url in pairs(cx.yanked) do\n\t-- ...\nend\n"})}),"\n",(0,n.jsx)(i.p,{children:"Meta methods:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"__len()"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"__pairs()"})," - Iterate over the yanked ",(0,n.jsx)(i.a,{href:"#shared.url",children:"Url"}),"s."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Properties:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"is_cut"})," - Whether the yanked urls are cut."]}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},6225:(e,i,s)=>{s.d(i,{Z:()=>h,a:()=>r});var n=s(959);const d={},l=n.createContext(d);function r(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function h(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);