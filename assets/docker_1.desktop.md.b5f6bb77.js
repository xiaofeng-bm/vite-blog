import{_ as s,o as a,c as n,a as l}from"./app.71119768.js";var e="/vite-blog/assets/1.desktop.f9e12b47.png",p="/vite-blog/assets/2.pull-nginx.e5c38abb.png",o="/vite-blog/assets/3.run-container.d883454a.png",t="/vite-blog/assets/4.localhost.99ba162f.png",c="/vite-blog/assets/5.dir.328a1e1a.png",r="/vite-blog/assets/6.mount.e7d25e47.png";const A='{"title":"Desktop \u4F7F\u7528","description":"","frontmatter":{"title":"Desktop \u4F7F\u7528"},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u5730\u5740","slug":"\u4E0B\u8F7D\u5730\u5740"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":3,"title":"\u6302\u8F7D\u76EE\u5F55","slug":"\u6302\u8F7D\u76EE\u5F55"},{"level":2,"title":"\u547D\u4EE4\u884C\u64CD\u4F5C","slug":"\u547D\u4EE4\u884C\u64CD\u4F5C"}],"relativePath":"docker/1.desktop.md"}',i={},D=l(`<h2 id="\u4E0B\u8F7D\u5730\u5740" tabindex="-1">\u4E0B\u8F7D\u5730\u5740 <a class="header-anchor" href="#\u4E0B\u8F7D\u5730\u5740" aria-hidden="true">#</a></h2><p><a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">\u4E0B\u8F7D\u5730\u5740</a>\uFF0C\u9009\u62E9<code>Docker Desktop</code>\uFF0Cmac\u6CE8\u610F\u4E00\u4E0B\u82AF\u7247\u7C7B\u578B \u786E\u8BA4\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="language-bash"><pre><code><span class="line"><span style="color:#A6ACCD;">docker -h</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2><p><img src="`+e+'" alt=""></p><p><code>images</code>\u662F\u672C\u5730\u6240\u6709\u7684\u955C\u50CF\uFF0C<code>containers</code>\u662F\u955C\u50CF\u8DD1\u8D77\u6765\u7684\u5BB9\u5668\u3002</p><p><img src="'+p+'" alt=""> \u641C\u7D22<code>nginx</code>\uFF0C\u70B9\u51FB<code>pull</code>\uFF08<span style="color:red;">\u6CE8\u610F\uFF1A\u8FD9\u4E00\u6B65\u9700\u8981\u7FFB\u5899\uFF0C\u4E0D\u7136\u641C\u4E0D\u5230</span>\uFF09</p><p><img src="'+o+`" alt=""> \u6253\u5F00\u672C\u5730\u7684<code>/tmp/aaa</code>\u6DFB\u52A0<code>index.html</code></p><div class="language-html"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Document</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">aaaa</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h1</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u6D4F\u89C8\u5668\u6253\u5F00<code>http://localhost/</code><img src="`+t+'" alt=""></p><h3 id="\u6302\u8F7D\u76EE\u5F55" tabindex="-1">\u6302\u8F7D\u76EE\u5F55 <a class="header-anchor" href="#\u6302\u8F7D\u76EE\u5F55" aria-hidden="true">#</a></h3><p><img src="'+c+'" alt=""><img src="'+r+`" alt=""></p><h2 id="\u547D\u4EE4\u884C\u64CD\u4F5C" tabindex="-1">\u547D\u4EE4\u884C\u64CD\u4F5C <a class="header-anchor" href="#\u547D\u4EE4\u884C\u64CD\u4F5C" aria-hidden="true">#</a></h2><p>\u5DF2\u4E0A\u64CD\u4F5C\u5728<code>Docker Desktop</code>\u5185\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u5230\u4E86\u670D\u52A1\u5668\u4E0A\uFF0C\u6CA1\u6709<code>Docker Desktop</code>\u8FD9\u79CD\u53EF\u89C6\u5316\u7684\u4E1C\u897F\uFF0C\u5C31\u8981\u9760\u6572\u547D\u4EE4\u4E86\u3002</p><div class="language-bash"><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1\u3001\u62C9\u53D6nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">docker pull nginx:latest</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2\u3001\u521B\u5EFA\u5BB9\u5668</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --name \u5BB9\u5668\u540D\u79F0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -p (Ports) \u7AEF\u53E3\u6620\u5C04</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -v (Volumes) \u5236\u5B9A\u6570\u636E\u5377\u6302\u8F7D\u76EE\u5F55</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -e\uFF08Environment variables\uFF09 \u6307\u5B9A\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -d \u540E\u53F0\u8FD0\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run --name nginx-test -p 80:80 -v /tmp/aaa:/usr/share/nginx/html -e KEY1=VALUE1 -d nginx:latest </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u8FDB\u5165Terminal</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -i terminal \u4EA4\u4E92\u7684\u65B9\u5F0F\u8FD0\u884C</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># -t tty\u7EC8\u7AEF\u7C7B\u578B</span></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it affb635215c88acbffecf021f1f8f21c835b608f3b1a58a91eaca77a75029f25 /bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u65E5\u5FD7</span></span>
<span class="line"><span style="color:#A6ACCD;">docker logs affb635215c88acbffecf021f1f8f21c835b608f3b1a58a91eaca77a75029f25</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u67E5\u770B\u5BB9\u5668\u8BE6\u60C5</span></span>
<span class="line"><span style="color:#A6ACCD;">docker inspect affb635215c88acbffecf021f1f8f21c835b608f3b1a58a91eaca77a75029f25</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,15),y=[D];function F(d,f,g,h,_,m){return a(),n("div",null,y)}var b=s(i,[["render",F]]);export{A as __pageData,b as default};