import{_ as s,o as n,c as l,a}from"./app.1bea4cfd.js";const i='{"title":"21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868","description":"","frontmatter":{"title":"21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868"},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u5B9E\u73B0\u4EE3\u7801","slug":"\u5B9E\u73B0\u4EE3\u7801"},{"level":2,"title":"\u5176\u5B83\u65B9\u6848","slug":"\u5176\u5B83\u65B9\u6848"}],"relativePath":"leetcode/easy/21.\u5408\u5E76\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868.md"}',p={},o=a(`<p><a href="https://leetcode-cn.com/problems/merge-two-sorted-lists/" target="_blank" rel="noopener noreferrer">\u539F\u9898\u5730\u5740</a></p><p>\u5C06\u4E24\u4E2A\u6709\u5E8F\u94FE\u8868\u5408\u5E76\u4E3A\u4E00\u4E2A\u65B0\u7684\u6709\u5E8F\u94FE\u8868\u5E76\u8FD4\u56DE\u3002\u65B0\u94FE\u8868\u662F\u901A\u8FC7\u62FC\u63A5\u7ED9\u5B9A\u7684\u4E24\u4E2A\u94FE\u8868\u7684\u6240\u6709\u8282\u70B9\u7EC4\u6210\u7684\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-md"><pre><code><span class="line"><span style="color:#A6ACCD;">\u8F93\u5165\uFF1A1-&gt;2-&gt;4, 1-&gt;3-&gt;4</span></span>
<span class="line"><span style="color:#A6ACCD;">\u8F93\u51FA\uFF1A1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u8FD9\u9898\u6BD4\u7B2C\u4E8C\u9898<a href="./../medium/2.\u4E24\u6570\u76F8\u52A0.html">\u4E24\u6570\u76F8\u52A0</a>\u66F4\u52A0\u7B80\u5355\uFF0C\u7B80\u8981\u8BF4\u660E\u4E00\u4E0B\u601D\u8DEF\uFF1A</p><ul><li>1\u3001\u521D\u59CB\u5316\u5934\u8282\u70B9\uFF0C\u5B9A\u4E49\u54D1\u7ED3\u70B9</li><li>2\u3001\u5224\u65AD\u5FAA\u73AFl1\uFF0Cl2\u4E24\u4E2A\u94FE\u8868\uFF0C\u6BCF\u6B21\u5C06val\u5C0F\u7684\u90A3\u4E2A\u8282\u70B9\u653E\u5230\u65B0\u94FE\u8868\u4E2D</li><li>3\u3001\u5904\u7406\u94FE\u8868\u4E0D\u7B49\u957F\u7684\u8FB9\u754C\u6761\u4EF6</li></ul><h2 id="\u5B9E\u73B0\u4EE3\u7801" tabindex="-1">\u5B9E\u73B0\u4EE3\u7801 <a class="header-anchor" href="#\u5B9E\u73B0\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> mergeTwoLists </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ListNode</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">l1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">l1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">l2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">cur</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u5904\u7406\u94FE\u8868\u4E0D\u7B49\u957F\u95EE\u9898</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">cur</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u6267\u884C\u7528\u65F6\uFF1A84 ms, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8644.99%\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u5185\u5B58\u6D88\u8017\uFF1A35.9 MB, \u5728\u6240\u6709 JavaScript \u63D0\u4EA4\u4E2D\u51FB\u8D25\u4E8685.29%\u7684\u7528\u6237</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n + m) n,m\u5206\u522B\u4E3A\u4E24\u4E2A\u94FE\u8868\u7684\u957F\u5EA6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// \u7A7A\u95F4\u590D\u6742\u5EA6\uFF1AO1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5176\u5B83\u65B9\u6848" tabindex="-1">\u5176\u5B83\u65B9\u6848 <a class="header-anchor" href="#\u5176\u5B83\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u5B98\u65B9\u89E3\u7B54\u4E00\uFF1A\u9012\u5F52</p><div class="language-js"><pre><code><span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> mergeTwoLists </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> l2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// \u9012\u5F52\u7ED3\u675F\u6761\u4EF6l1 === null || l2 === null</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">l1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">l2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">mergeTwoLists</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">mergeTwoLists</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">l1</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">next</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u5BF9\u9012\u5F52\u719F\u6089\u7684\u4E00\u773C\u5C31\u80FD\u770B\u61C2\u4E86\u3002</p>`,13),e=[o];function t(c,r,F,y,D,A){return n(),l("div",null,e)}var d=s(p,[["render",t]]);export{i as __pageData,d as default};
