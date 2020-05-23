(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{156:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return s})),o.d(t,"rightToc",(function(){return l})),o.d(t,"default",(function(){return c}));var i=o(2),n=o(9),a=(o(0),o(166)),r={id:"glue-preview",title:"MuxFM Glue Preview",author:"Shivek Khurana",author_title:"Founder of Krim Labs and co-creator of MuxFM",author_url:"https://github.com/shivekkhurana",author_image_url:"https://avatars0.githubusercontent.com/u/1925158?s=400&v=4",tags:["glue","beta"]},s={permalink:"/blog/glue-preview",editUrl:"https://github.com/muxfm/docs/edit/master/blog/2020-05-05-glue-preview.md",source:"@site/blog/2020-05-05-glue-preview.md",description:"Problem",date:"2020-05-05T00:00:00.000Z",tags:[{label:"glue",permalink:"/blog/tags/glue"},{label:"beta",permalink:"/blog/tags/beta"}],title:"MuxFM Glue Preview",readingTime:.88,truncated:!0,prevItem:{title:"MuxFM Preview",permalink:"/blog/muxfm-preview"}},l=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]}],u={rightToc:l};function c(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},u,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"problem"},"Problem"),Object(a.b)("p",null,"Anchor FM is the easiest way to start a podcast. But ease comes at the cost of SEO juice. The one click distribute option provided by Anchor publishes to their channels. This makes is impossible to move to another provider. This also puts the host in a compromised position, since access to audience is controlled by Anchor. Although Anchor allows for an option to submit feed manually, essentially returning control to the podcaster, there are still links that point back to Anchor services."),Object(a.b)("h2",{id:"solution"},"Solution"),Object(a.b)("p",null,"We wanted to build a JAMStack solution for hosting a Podcast. But since Anchor exposes a feed, we decided to use Anchor as a backend instead of rolling out our own."),Object(a.b)("p",null,"We transform Anchor's feed by replacing backlinks to anchor.fm with a custom url (your podcast website). We also create json files for channel meta, episode index and individual episodes. You can then easily use this json API to spin up your own sites, with all media hosted at Anchor, and all SEO juice sent to your domain."))}c.isMDXComponent=!0}}]);