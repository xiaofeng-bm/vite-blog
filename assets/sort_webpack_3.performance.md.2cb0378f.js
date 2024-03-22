import{_ as s,o as a,c as n,a as l}from"./app.1bea4cfd.js";const d='{"title":"webpack \u6027\u80FD\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u4F18\u5316","slug":"\u6784\u5EFA\u4F18\u5316"},{"level":3,"title":"cache","slug":"cache"},{"level":3,"title":"\u5E76\u884C\u6784\u5EFA\uFF08\u4E2A\u4EBA\u611F\u89C9\u8FD9\u65B9\u5F0F\u7528\u5904\u4E0D\u5927\uFF0C\u5B9E\u5728\u9700\u8981\u4E86\u5728\u6363\u9F13\uFF09","slug":"\u5E76\u884C\u6784\u5EFA\uFF08\u4E2A\u4EBA\u611F\u89C9\u8FD9\u65B9\u5F0F\u7528\u5904\u4E0D\u5927\uFF0C\u5B9E\u5728\u9700\u8981\u4E86\u5728\u6363\u9F13\uFF09"},{"level":3,"title":"lazyCompilation \uFF085.17.0+\uFF09","slug":"lazycompilation-\uFF085-17-0-\uFF09"},{"level":3,"title":"\u7EA6\u675F loader \u6267\u884C\u8303\u56F4","slug":"\u7EA6\u675F-loader-\u6267\u884C\u8303\u56F4"},{"level":3,"title":"noParse (\u8DF3\u8FC7\u6587\u4EF6\u7F16\u8BD1)","slug":"noparse-\u8DF3\u8FC7\u6587\u4EF6\u7F16\u8BD1"},{"level":2,"title":"\u6253\u5305\u4EA7\u7269\u4F18\u5316","slug":"\u6253\u5305\u4EA7\u7269\u4F18\u5316"},{"level":3,"title":"SplitChunksPlugin","slug":"splitchunksplugin"},{"level":3,"title":"\u8BBE\u7F6E\u5206\u5305\u8303\u56F4(chunks)","slug":"\u8BBE\u7F6E\u5206\u5305\u8303\u56F4-chunks"},{"level":3,"title":"\u6839\u636Emodule\u4F7F\u7528\u9891\u7387\u5206\u5305(minChunks)","slug":"\u6839\u636Emodule\u4F7F\u7528\u9891\u7387\u5206\u5305-minchunks"},{"level":3,"title":"\u9650\u5236\u5206\u5305\u6570\u91CF","slug":"\u9650\u5236\u5206\u5305\u6570\u91CF"},{"level":3,"title":"\u9650\u5236\u5206\u5305\u4F53\u79EF","slug":"\u9650\u5236\u5206\u5305\u4F53\u79EF"},{"level":3,"title":"\u914D\u7F6E\u9879\u4E0E\u6700\u4F73\u5B9E\u8DF5","slug":"\u914D\u7F6E\u9879\u4E0E\u6700\u4F73\u5B9E\u8DF5"},{"level":3,"title":"\u4EE3\u7801\u538B\u7F29","slug":"\u4EE3\u7801\u538B\u7F29"}],"relativePath":"sort/webpack/3.performance.md"}',e={},p=l(`<h1 id="webpack-\u6027\u80FD\u4F18\u5316" tabindex="-1">webpack \u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#webpack-\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="\u6784\u5EFA\u4F18\u5316" tabindex="-1">\u6784\u5EFA\u4F18\u5316 <a class="header-anchor" href="#\u6784\u5EFA\u4F18\u5316" aria-hidden="true">#</a></h2><h3 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-hidden="true">#</a></h3><p><code>webpack5</code>\u5E26\u6765\u4E86<a href="https://webpack.docschina.org/configuration/cache/#cache" target="_blank" rel="noopener noreferrer">cache</a>\u6301\u4E45\u5316\u7F13\u5B58\u7684\u65B9\u6848\uFF0C\u5206\u4E3A\u4E24\u79CD\u6A21\u5F0F<code>memory</code>\u548C<code>filesystem</code>\u3002</p><ul><li>memory: \u5728\u5185\u5B58\u4E2D\u5B58\u50A8\u7F13\u5B58\uFF0C\u4E0D\u5141\u8BB8\u6709\u989D\u5916\u7684\u914D\u7F6E\u3002</li><li>filesystem\uFF1A\u53EF\u4EE5\u6301\u4E45\u5316\u7684\u4FDD\u5B58\u5230\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E2D\uFF0C\u6709\u5F88\u591A\u914D\u7F6E\u9879\u53EF\u9009\uFF0C\u5177\u4F53\u770B<a href="https://webpack.docschina.org/configuration/cache/#cache" target="_blank" rel="noopener noreferrer">cache</a>\u6587\u6863</li></ul><p><code>filesystem</code>\u53EF\u4EE5\u5927\u5E45\u5EA6\u63D0\u5347\u4E8C\u6B21\u6784\u5EFA\u7684\u6548\u7387\uFF0C\u7B80\u5355\u7406\u89E3\u5C31\u662F\u7B2C\u4E00\u6B21\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u628A\u5F88\u591A<code>Module</code> <code>Chunk</code>\u7B49\u7F13\u5B58\u5230\u4E86\u672C\u5730\uFF0C\u7B2C\u4E8C\u6B21\u6784\u5EFA\u5C31\u76F4\u63A5\u7528\u4E86\uFF0C</p><h3 id="\u5E76\u884C\u6784\u5EFA\uFF08\u4E2A\u4EBA\u611F\u89C9\u8FD9\u65B9\u5F0F\u7528\u5904\u4E0D\u5927\uFF0C\u5B9E\u5728\u9700\u8981\u4E86\u5728\u6363\u9F13\uFF09" tabindex="-1">\u5E76\u884C\u6784\u5EFA\uFF08\u4E2A\u4EBA\u611F\u89C9\u8FD9\u65B9\u5F0F\u7528\u5904\u4E0D\u5927\uFF0C\u5B9E\u5728\u9700\u8981\u4E86\u5728\u6363\u9F13\uFF09 <a class="header-anchor" href="#\u5E76\u884C\u6784\u5EFA\uFF08\u4E2A\u4EBA\u611F\u89C9\u8FD9\u65B9\u5F0F\u7528\u5904\u4E0D\u5927\uFF0C\u5B9E\u5728\u9700\u8981\u4E86\u5728\u6363\u9F13\uFF09" aria-hidden="true">#</a></h3><p>\u4E4B\u524D<code>Node</code>\u662F\u5355\u7EBF\u7A0B\uFF0C<code>v10.5.0</code>\u4E4B\u540E\u591A\u4E86\u4E2A<code>worker_threads</code>\u5DE5\u4F5C\u7EBF\u7A0B\uFF0C\u8BF4\u662F\u5BF9\u4E8E<code>CPU</code>\u5BC6\u96C6\u578B\u64CD\u4F5C\u5F88\u6709\u7528\uFF0C\u4F46\u5177\u4F53\u6211\u4E5F\u6CA1\u5206\u6790\u8FC7\u3002<br> \u8FD9\u91CC\u5C31\u8BF4\u4E00\u4E0B\u4E00\u4E9B\u793E\u533A\u4EE5\u591A\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\uFF1A</p><ul><li><a href="https://github.com/amireh/happypack" target="_blank" rel="noopener noreferrer">HappyPack</a>\uFF1A\u591A\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\u8D44\u6E90\u52A0\u8F7D(Loader)\u903B\u8F91\uFF1B</li><li><a href="https://webpack.js.org/loaders/thread-loader/" target="_blank" rel="noopener noreferrer">Thread-loader</a>\uFF1AWebpack \u5B98\u65B9\u51FA\u54C1\uFF0C\u540C\u6837\u4EE5\u591A\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\u8D44\u6E90\u52A0\u8F7D\u903B\u8F91\uFF1B</li><li><a href="https://www.npmjs.com/package/parallel-webpack" target="_blank" rel="noopener noreferrer">Parallel-Webpack</a>\uFF1A\u591A\u8FDB\u7A0B\u65B9\u5F0F\u8FD0\u884C\u591A\u4E2A Webpack \u6784\u5EFA\u5B9E\u4F8B\uFF1B</li><li><a href="https://www.npmjs.com/package/terser-webpack-plugin#terseroptions" target="_blank" rel="noopener noreferrer">TerserWebpackPlugin</a>\uFF1A\u652F\u6301\u591A\u8FDB\u7A0B\u65B9\u5F0F\u6267\u884C\u4EE3\u7801\u538B\u7F29\u3001uglify \u529F\u80FD\u3002</li></ul><p>\u8FD9\u4E9B\u65B9\u6848\u7684\u6838\u5FC3\u8BBE\u8BA1\u90FD\u5F88\u7C7B\u4F3C\uFF1A\u9488\u5BF9\u67D0\u79CD\u8BA1\u7B97\u4EFB\u52A1\u521B\u5EFA\u5B50\u8FDB\u7A0B\uFF0C\u4E4B\u540E\u5C06\u8FD0\u884C\u6240\u9700\u53C2\u6570\u901A\u8FC7 IPC \u4F20\u9012\u5230\u5B50\u8FDB\u7A0B\u5E76\u542F\u52A8\u8BA1\u7B97\u64CD\u4F5C\uFF0C\u8BA1\u7B97\u5B8C\u6BD5\u540E\u5B50\u8FDB\u7A0B\u518D\u5C06\u7ED3\u679C\u901A\u8FC7 IPC \u4F20\u9012\u56DE\u4E3B\u8FDB\u7A0B\uFF0C\u5BC4\u5BBF\u5728\u4E3B\u8FDB\u7A0B\u7684\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u518D\u5C06\u7ED3\u679C\u63D0\u4EA4\u7ED9 Webpack\u3002</p><h3 id="lazycompilation-\uFF085-17-0-\uFF09" tabindex="-1">lazyCompilation \uFF085.17.0+\uFF09 <a class="header-anchor" href="#lazycompilation-\uFF085-17-0-\uFF09" aria-hidden="true">#</a></h3><p>\u6CE8\u610F\uFF1A\u8FD9\u662F\u4E2A\u5B9E\u9A8C\u7279\u6027\uFF0C\u6700\u597D\u53EA\u5728\u5F00\u53D1\u73AF\u5883\u4F7F\u7528\u3002<br> \u7B80\u5355\u7406\u89E3\u5C31\u662F\uFF0C\u5565\u65F6\u5019\u4F7F\u7528\uFF0C\u5565\u65F6\u5019\u7F16\u8BD1\uFF0C\u6BD4\u5982\uFF0C\u4F60\u6709\u5F88\u591A\u6309\u7167\u8DEF\u7531\u5212\u5206\u7684\u6A21\u5757\uFF0C\u4F46\u662F<code>webpack</code>\u5728\u542F\u52A8\u65F6\uFF0C\u4F1A\u628A\u6240\u6709\u7684\u6A21\u5757\u90FD\u6784\u5EFA\u597D\u3002\u5176\u5B9E\u53EF\u80FD\u4F60\u5C31\u9700\u8981\u8BBF\u95EE\u4E00\u4E24\u4E2A\u6A21\u5757\u3002<br><code>lazyCompilation</code>\u5C31\u662F\u5728\u4F60\u8BBF\u95EE\u5230\u90A3\u4E2A\u5F02\u6B65\u6A21\u5757\u7684\u65F6\u5019\u5728\u8FDB\u884C\u7F16\u8BD1\uFF0C\u8FD9\u6837\u5C31\u80FD\u63D0\u5347\u5F88\u591A\u521D\u59CB\u51B7\u542F\u52A8\u7684\u901F\u5EA6\uFF0C\u5F53\u7136\uFF0C\u5F53\u4F60\u8BBF\u95EE\u5F02\u6B65\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u8FD8\u8981\u73B0\u7F16\u8BD1\uFF0C\u6240\u4EE5\u4F1A\u4E00\u6B21\u6027\u7F16\u8BD1\u597D\u8FD9\u79CD\u6162\u4E00\u4E9B\u3002</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">experiments</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lazyCompilation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="\u7EA6\u675F-loader-\u6267\u884C\u8303\u56F4" tabindex="-1">\u7EA6\u675F loader \u6267\u884C\u8303\u56F4 <a class="header-anchor" href="#\u7EA6\u675F-loader-\u6267\u884C\u8303\u56F4" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u6765\u8BF4\u5C31\u6392\u9664\u4E00\u4E0B<code>node_modules</code>\u91CC\u7684\u5C31\u884C\uFF0C\u56E0\u4E3A<code>loader</code>\u8F6C\u6362\u6709\u4E9B\u9700\u8981\u5BC6\u96C6 CPU \u8FD0\u7B97\uFF0C\u6BD4\u5982<code>babel-loader</code>\u7B49\uFF0C\u6BD4\u8F83\u8017\u65F6\uFF0C\u5C31\u628A\u4E00\u4E9B\u4E0D\u9700\u8981\u8F6C\u6362\u7684\u6392\u9664\u6389</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">js</span><span style="color:#89DDFF;font-style:italic;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">use</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">babel-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eslint-loader</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="noparse-\u8DF3\u8FC7\u6587\u4EF6\u7F16\u8BD1" tabindex="-1">noParse (\u8DF3\u8FC7\u6587\u4EF6\u7F16\u8BD1) <a class="header-anchor" href="#noparse-\u8DF3\u8FC7\u6587\u4EF6\u7F16\u8BD1" aria-hidden="true">#</a></h3><p>\u9632\u6B62 webpack \u89E3\u6790\u90A3\u4E9B\u4EFB\u4F55\u4E0E\u7ED9\u5B9A\u6B63\u5219\u8868\u8FBE\u5F0F\u76F8\u5339\u914D\u7684\u6587\u4EF6\u3002\u5FFD\u7565\u7684\u6587\u4EF6\u4E2D \u4E0D\u5E94\u8BE5\u542B\u6709 import, require, define \u7684\u8C03\u7528\uFF0C\u6216\u4EFB\u4F55\u5176\u4ED6\u5BFC\u5165\u673A\u5236\u3002\u5FFD\u7565\u5927\u578B\u7684 library \u53EF\u4EE5\u63D0\u9AD8\u6784\u5EFA\u6027\u80FD\u3002</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">module</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">noParse</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u540E\uFF0C\u6240\u6709\u5339\u914D\u8BE5\u6B63\u5219\u7684\u6587\u4EF6\u90FD\u4F1A\u8DF3\u8FC7\u524D\u7F6E\u7684\u6784\u5EFA\u3001\u5206\u6790\u52A8\u4F5C\uFF0C\u76F4\u63A5\u5C06\u5185\u5BB9\u5408\u5E76\u8FDB Chunk\uFF0C\u4ECE\u800C\u63D0\u5347\u6784\u5EFA\u901F\u5EA6\u3002</p><h2 id="\u6253\u5305\u4EA7\u7269\u4F18\u5316" tabindex="-1">\u6253\u5305\u4EA7\u7269\u4F18\u5316 <a class="header-anchor" href="#\u6253\u5305\u4EA7\u7269\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u4E00\u822C\u6765\u8BF4\uFF0C<code>webpack</code>\u4F1A\u5C3D\u53EF\u80FD\u7684\u5427\u591A\u7684\u6A21\u5757\u6253\u5305\u5728\u4E00\u8D77\uFF0C\u8FD9\u6837\u4F1A\u51CF\u5C11 HTTP \u8BF7\u6C42\u7684\u6570\u91CF\uFF0C\u4F46\u662F\u968F\u7740\u9879\u76EE\u53D8\u5927\uFF0C\u95EE\u9898\u4E5F\u4F1A\u6709\u5F88\u591A\uFF1A</p><ul><li>1\u3001\u4E0D\u5229\u4E8E\u9996\u5C4F\u6E32\u67D3\uFF0C\u521D\u59CB\u4EE3\u7801\u5305\u8FC7\u5927\u3002</li><li>2\u3001\u6CA1\u6709\u5229\u7528\u597D\u7F13\u5B58\uFF0C\u5982\u679C\u90FD\u6253\u5230\u4E00\u4E2A\u8F83\u5927\u7684\u5305\u91CC\uFF0C\u968F\u4FBF\u4E00\u70B9\u4EE3\u7801\u6539\u52A8\uFF0C\u7F13\u5B58\u5C31\u5931\u6548\u4E86\uFF0C\u5C24\u5176\u662F\u4EE3\u7801\u4E2D\u4F7F\u7528\u7684\u4E00\u4E9B\u7B2C\u4E09\u65B9 npm \u5305\uFF0C\u65E0\u6CD5\u5229\u7528\u597D\u6D4F\u89C8\u5668\u7684\u7F13\u5B58\u673A\u5236\u3002</li></ul><p>\u6240\u4EE5\u4F1A\u6709\u4E00\u4E9B\u7B56\u7565\u8FDB\u884C\u4F18\u5316\uFF0C\u6BD4\u5982\u8BF4\u5C06\u4E00\u4E9B\u7B2C\u4E09\u65B9npm\u5305\u5355\u72EC\u6253\u51FA\u6765\uFF0C\u53EF\u4EE5\u5F88\u597D\u7684\u5229\u7528\u6D4F\u89C8\u5668\u7F13\u5B58\u673A\u5236\uFF0C\u4E00\u4E9B\u4F53\u79EF\u8FC7\u5C0F\u7684\uFF0C\u5C31\u5408\u5E76\u5230\u4E00\u8D77\uFF0C\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\u3002</p><h3 id="splitchunksplugin" tabindex="-1">SplitChunksPlugin <a class="header-anchor" href="#splitchunksplugin" aria-hidden="true">#</a></h3><p><a href="https://webpack.docschina.org/plugins/split-chunks-plugin/" target="_blank" rel="noopener noreferrer">SplitChunksPlugin</a>\u53EF\u4EE5\u6839\u636E\u4EA7\u7269\u7684\u4F53\u79EF\uFF0C\u5F15\u7528\u6B21\u6570\u7B49\u8FDB\u884C\u4E00\u4E9B\u5206\u5305\u7684\u4F18\u5316\uFF0C\u4E00\u822C\u6765\u8BF4\u5B83\u7684\u9ED8\u8BA4\u503C\u5C31\u6BD4\u8F83\u53CB\u597D\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p><ul><li>1\u3001\u65B0\u7684 chunk \u53EF\u4EE5\u88AB\u5171\u4EAB\uFF0C\u6216\u8005\u6A21\u5757\u6765\u81EA\u4E8E <code>node_modules</code> \u6587\u4EF6\u5939</li><li>2\u3001\u65B0\u7684 chunk \u4F53\u79EF\u5927\u4E8E 20kb\uFF08\u5728\u8FDB\u884C min+gz \u4E4B\u524D\u7684\u4F53\u79EF\uFF09</li><li>3\u3001\u5F53\u6309\u9700\u52A0\u8F7D chunks \u65F6\uFF0C\u5E76\u884C\u8BF7\u6C42\u7684\u6700\u5927\u6570\u91CF\u5C0F\u4E8E\u6216\u7B49\u4E8E 30</li><li>4\u3001\u5F53\u52A0\u8F7D\u521D\u59CB\u5316\u9875\u9762\u65F6\uFF0C\u5E76\u53D1\u8BF7\u6C42\u7684\u6700\u5927\u6570\u91CF\u5C0F\u4E8E\u6216\u7B49\u4E8E 30 \u5F53\u6EE1\u8DB3\u6700\u540E\u4E24\u4E2A\u6761\u4EF6\u65F6\uFF0C\u6700\u597D\u7528\u8F83\u5927\u7684 chunks\u3002</li></ul><p>\u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF08\u540E\u9762\u6D4B\u8BD5\u8FD9\u4E2A\u597D\u50CF\u4E0D\u5199\u4E0D\u4F1A\u9ED8\u8BA4\u751F\u6548\uFF09\uFF1A</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">optimization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">chunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">async</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u8FD9\u8868\u660E\u5C06\u9009\u62E9\u54EA\u4E9B chunk \u8FDB\u884C\u4F18\u5316\u3002\u5F53\u63D0\u4F9B\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u6709\u6548\u503C\u4E3A all\uFF0Casync \u548C initial\u3002\u8BBE\u7F6E\u4E3A all \u53EF\u80FD\u7279\u522B\u5F3A\u5927\uFF0C\u56E0\u4E3A\u8FD9\u610F\u5473\u7740 chunk \u53EF\u4EE5\u5728\u5F02\u6B65\u548C\u975E\u5F02\u6B65 chunk \u4E4B\u95F4\u5171\u4EAB\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// \u751F\u6210 chunk \u7684\u6700\u5C0F\u4F53\u79EF\uFF08\u4EE5 bytes \u4E3A\u5355\u4F4D\uFF09\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minRemainingSize</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u907F\u514D\u51FA\u73B0\u5927\u5C0F\u4E3A0\u7684chunk\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">         </span><span style="color:#676E95;font-style:italic;">// \u62C6\u5206\u524D\u5FC5\u987B\u5171\u4EAB\u6A21\u5757\u7684\u6700\u5C0F chunks \u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">maxAsyncRequests</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u6309\u9700\u52A0\u8F7D\u65F6\u7684\u6700\u5927\u5E76\u884C\u8BF7\u6C42\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">maxInitialRequests</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// \u5165\u53E3\u70B9\u7684\u6700\u5927\u5E76\u884C\u8BF7\u6C42\u6570\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">enforceSizeThreshold</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// \u5F3A\u5236\u6267\u884C\u62C6\u5206\u7684\u4F53\u79EF\u9608\u503C\u548C\u5176\u4ED6\u9650\u5236\uFF08minRemainingSize\uFF0CmaxAsyncRequests\uFF0CmaxInitialRequests\uFF09\u5C06\u88AB\u5FFD\u7565\u3002</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">cacheGroups</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// \u7ED9\u4E0D\u540C\u6587\u4EF6\u7EC4\u914D\u7F6E\u4E0D\u540C\u7684\u89C4\u5219</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">defaultVendors</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">\\\\</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">]/</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">   </span><span style="color:#676E95;font-style:italic;">// \u8BE5\u5206\u7EC4\u7684\u4F18\u5148\u7EA7\uFF0C\u5982\u679C\u6A21\u5757\u547D\u4E2D\u591A\u4E2A\u7F13\u5B58\u7EC4\uFF0C\u5219\u6309\u7167\u4F18\u5148\u7EA7\u5927\u5C0F\u6765\u5206\u914D</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">reuseExistingChunk</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">priority</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">reuseExistingChunk</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p>\u4E00\u7248\u6765\u8BF4<code>SplitChunksPlugin</code>\u9ED8\u8BA4\u7684\u914D\u7F6E\u7B26\u5408 web \u6700\u4F73\u5B9E\u8DF5\uFF0C\u5982\u679C\u4F60\u4EEC\u9879\u76EE\u6700\u4F73\u7B56\u7565\u4E0D\u540C\uFF0C\u5E76\u4E14\u4F60\u5BF9\u8FD9\u5757\u5F88\u719F\u6089\u7684\u8BDD\uFF0C\u5728\u53BB\u4FEE\u6539\uFF0C\u5E76\u4E14\u8981\u8BC4\u4F30\u4E00\u4E0B\u771F\u6B63\u7684\u6536\u76CA\u3002</p><p>1 \u548C 2 \u6BD4\u8F83\u597D\u7406\u89E3\uFF0C3 \u7684\u5E76\u884C\u5C31\u662F\u6307\uFF0C\u52A0\u8F7D A \u6A21\u5757\uFF0CA \u6A21\u5757\u91CC\u8FD8\u9700\u8981\u52A0\u8F7D B\u3001C\u3001D \u7B49\u6A21\u5757\u8D85\u8FC7 30 \u4E2A\uFF0C\u4E0D\u5EFA\u8BAE\u5206\u5305\uFF0C4 \u7684\u5E76\u53D1\u5C31\u662F\u6307\u521D\u59CB\u5316\u9875\u9762\u8BF7\u6C42\u7684\u8D44\u6E90\u6570\u91CF\u6700\u597D\u5C11\u4E8E 30 \u4E2A\u3002</p><h3 id="\u8BBE\u7F6E\u5206\u5305\u8303\u56F4-chunks" tabindex="-1">\u8BBE\u7F6E\u5206\u5305\u8303\u56F4(chunks) <a class="header-anchor" href="#\u8BBE\u7F6E\u5206\u5305\u8303\u56F4-chunks" aria-hidden="true">#</a></h3><p><code>splitChunks.chunks</code>\u9ED8\u8BA4\u53EA\u4F1A\u5BF9<code>async chunk</code>\u751F\u6548\uFF0C</p><ul><li><code>initial</code>\uFF1A\u666E\u901A\u7684\u90A3\u4E9B\u88AB\u89C6\u4F5C\u6A21\u5757\u5BFC\u5165\u7684\uFF0C\u4F8B\u5982\uFF1A<code>import xxx from xxx</code>\u3002</li><li><code>async chunk</code>\uFF1A\u5C31\u662F\u90A3\u4E9B\u901A\u8FC7<code>import(&#39;xxx&#39;)</code>\u5F15\u5165\u7684\u6A21\u5757\u3002</li><li><code>all</code>\uFF1A\u5C31\u662F\u6240\u6709\u7684\u3002</li></ul><h3 id="\u6839\u636Emodule\u4F7F\u7528\u9891\u7387\u5206\u5305-minchunks" tabindex="-1">\u6839\u636Emodule\u4F7F\u7528\u9891\u7387\u5206\u5305(minChunks) <a class="header-anchor" href="#\u6839\u636Emodule\u4F7F\u7528\u9891\u7387\u5206\u5305-minchunks" aria-hidden="true">#</a></h3><p>\u5F88\u597D\u7406\u89E3\uFF0C\u6BD4\u5982\u67D0\u4E2A\u6A21\u5757\u5728\u5F88\u591A\u5730\u65B9\u90FD\u6709\u4F7F\u7528\uFF0C\u90A3\u5C31\u6700\u597D\u62C6\u51FA\u6765\uFF0C\u907F\u514D\u591A\u5904\u6253\u5305\uFF0C\u662F\u7684\u5E94\u7528\u6574\u4F53\u4F53\u79EF\u8FC7\u5927\u3002</p><div class="language-js"><pre><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">optimization</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">splitChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// \u8BBE\u5B9A\u5F15\u7528\u6B21\u6570\u8D85\u8FC7 2 \u7684\u6A21\u5757\u624D\u8FDB\u884C\u5206\u5305</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minChunks</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">\u6CE8\u610F</p><p>\u8FD9\u91CC\u8BF4\u7684\u5F15\u7528\u8D85\u8FC7 2 \u5E76\u4E0D\u76F4\u63A5\u7B49\u4EF7\u4E8E\u88AB<code>import</code>\u7684\u6B21\u6570\uFF0C\u800C\u662F\u53D6\u51B3\u4E8E\u4E0A\u4E0B\u6E38\u8C03\u7528\u8005\u662F\u5426\u88AB\u89C6\u4F5C<code>Initial Chunk</code>\u6216\u8005<code>Async Chunk</code>\u3002\u53E6\u5916\u4F60\u8FD9\u91CC\u8BBE\u7F6E\u4E862\u4E5F\u4E0D\u4E00\u5B9A\u5C31\u4E00\u5B9A\u4F1A\u88AB\u62C6\u5206\uFF0C\u8FD8\u8981\u770B\u6EE1\u8DB3\u5176\u5B83\u6761\u4EF6\u4E0D\uFF0C\u6BD4\u5982<code>minSize</code>\u6216\u8005<code>chunks</code>\u7B49</p></div><h3 id="\u9650\u5236\u5206\u5305\u6570\u91CF" tabindex="-1">\u9650\u5236\u5206\u5305\u6570\u91CF <a class="header-anchor" href="#\u9650\u5236\u5206\u5305\u6570\u91CF" aria-hidden="true">#</a></h3><p>\u5982\u679C\u5206\u7684\u5305\u592A\u591A\uFF0C\u5C31\u4F1A\u5BFC\u81F4http\u7F51\u7EDC\u8BF7\u6C42\u6570\u91CF\u591A\uFF0C\u964D\u4F4E\u6027\u80FD\uFF0C<code>Webpack</code>\u63D0\u4F9B\u4E86<code>maxInitialRequest/maxAsyncRequest</code>\u914D\u7F6E\u9879\uFF0C\u9650\u5236\u5206\u5305\u6570\u91CF</p><ul><li><code>maxInitialRequest</code>\uFF1A\u7528\u4E8E\u8BBE\u7F6E Initial Chunk \u6700\u5927\u5E76\u884C\u8BF7\u6C42\u6570\uFF1B</li><li><code>maxAsyncRequests</code>\uFF1A\u7528\u4E8E\u8BBE\u7F6E Async Chunk \u6700\u5927\u5E76\u884C\u8BF7\u6C42\u6570\u3002</li></ul><h3 id="\u9650\u5236\u5206\u5305\u4F53\u79EF" tabindex="-1">\u9650\u5236\u5206\u5305\u4F53\u79EF <a class="header-anchor" href="#\u9650\u5236\u5206\u5305\u4F53\u79EF" aria-hidden="true">#</a></h3><ul><li>minSize\uFF1A \u8D85\u8FC7\u8FD9\u4E2A\u5C3A\u5BF8\u7684 Chunk \u624D\u4F1A\u6B63\u5F0F\u88AB\u5206\u5305\uFF1B</li><li>maxSize\uFF1A \u8D85\u8FC7\u8FD9\u4E2A\u5C3A\u5BF8\u7684 Chunk \u4F1A\u5C1D\u8BD5\u8FDB\u4E00\u6B65\u62C6\u5206\u51FA\u66F4\u5C0F\u7684 Chunk\uFF1B</li><li>maxAsyncSize\uFF1A \u4E0E maxSize \u529F\u80FD\u7C7B\u4F3C\uFF0C\u4F46\u53EA\u5BF9\u5F02\u6B65\u5F15\u5165\u7684\u6A21\u5757\u751F\u6548\uFF1B</li><li>maxInitialSize\uFF1A \u4E0E maxSize \u7C7B\u4F3C\uFF0C\u4F46\u53EA\u5BF9 entry \u914D\u7F6E\u7684\u5165\u53E3\u6A21\u5757\u751F\u6548\uFF1B</li><li>enforceSizeThreshold\uFF1A \u8D85\u8FC7\u8FD9\u4E2A\u5C3A\u5BF8\u7684 Chunk \u4F1A\u88AB\u5F3A\u5236\u5206\u5305\uFF0C\u5FFD\u7565\u4E0A\u8FF0\u5176\u5B83 Size \u9650\u5236\u3002</li></ul><h3 id="\u914D\u7F6E\u9879\u4E0E\u6700\u4F73\u5B9E\u8DF5" tabindex="-1">\u914D\u7F6E\u9879\u4E0E\u6700\u4F73\u5B9E\u8DF5 <a class="header-anchor" href="#\u914D\u7F6E\u9879\u4E0E\u6700\u4F73\u5B9E\u8DF5" aria-hidden="true">#</a></h3><ul><li>1\u3001\u9488\u5BF9<code>node_modules</code>\u8D44\u6E90\uFF0C\u901A\u8FC7<code>cacheGroups</code>\u6253\u6210\u5355\u72EC\u7684\u5305\uFF0C\u9632\u6B62\u4E1A\u52A1\u4EE3\u7801\u53D8\u66F4\u5F71\u54CDNPM\u5305\u7684\u7F13\u5B58\uFF0C\u540C\u65F6\u8BBE\u5B9A<code>maxSize</code>\u8BBE\u5B9A\u9619\u503C\uFF0C\u9632\u6B62vendor\u5305\u4F53\u79EF\u8FC7\u5927\uFF0C\u6709\u4E00\u4E9B\u6FC0\u8FDB\u7684\uFF0C\u5982\u679C\u751F\u4EA7\u73AF\u5883\u90E8\u7F72HTTP2/3\u8FD9\u79CD\u9AD8\u6027\u80FD\u7F51\u7EDC\u534F\u8BAE\uFF0C\u751A\u81F3\u53EF\u4EE5\u8003\u8651\u628A\u6BCF\u4E00\u4E2ANPM\u5305\u90FD\u6253\u6210\u5355\u72EC\u6587\u4EF6\u3002</li><li>2\u3001\u9488\u5BF9\u4E1A\u52A1\u4EE3\u7801\uFF1A <ul><li>1\u3001\u8BBE\u7F6E<code>common</code>\u5206\u7EC4\uFF0C\u901A\u8FC7<code>minChunks</code>\u5C06\u4F7F\u7528\u9891\u7387\u8F83\u9AD8\u7684\u8D44\u6E90\u5408\u5E76\u6210common\u8D44\u4EA7</li><li>2\u3001\u9996\u5C4F\u7528\u4E0D\u4E0A\u7684\u4EE3\u7801\uFF0C\u5C3D\u91CF\u7528\u5F02\u6B65\u65B9\u5F0F\u5F15\u5165\u3002</li></ul></li></ul><h3 id="\u4EE3\u7801\u538B\u7F29" tabindex="-1">\u4EE3\u7801\u538B\u7F29 <a class="header-anchor" href="#\u4EE3\u7801\u538B\u7F29" aria-hidden="true">#</a></h3><p>\u8FD9\u4E2A\u6CA1\u5565\u597D\u8BF4\u7684\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u5220\u6389\u7A7A\u683C\uFF0C\u5220\u9664</p>`,47),o=[p];function c(t,r,i,D,y,F){return a(),n("div",null,o)}var A=s(e,[["render",c]]);export{d as __pageData,A as default};