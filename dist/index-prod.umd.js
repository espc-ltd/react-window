!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactWindow={},t.React)}(this,(function(t,e){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}var a=Number.isNaN||function(t){return"number"==typeof t&&t!=t};function l(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(o=t[r],n=e[r],!(o===n||a(o)&&a(n)))return!1;var o,n;return!0}function s(t,e){var r;void 0===e&&(e=l);var o,n=[],i=!1;return function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return i&&r===this&&e(a,n)||(o=t.apply(this,a),i=!0,r=this,n=a),o}}var c="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function u(t){cancelAnimationFrame(t.id)}function f(t,e){var r=c();var o={id:requestAnimationFrame((function n(){c()-r>=e?t.call(null):o.id=requestAnimationFrame(n)}))};return o}var d=-1;function h(t){if(void 0===t&&(t=!1),-1===d||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),d=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return d}var m=null;function p(t){if(void 0===t&&(t=!1),null===m||t){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var o=document.createElement("div"),n=o.style;return n.width="100px",n.height="100px",e.appendChild(o),document.body.appendChild(e),e.scrollLeft>0?m="positive-descending":(e.scrollLeft=1,m=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),m}return m}var v=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e};function g(t){var n,a=t.getColumnOffset,l=t.getColumnStartIndexForOffset,c=t.getColumnStopIndexForStartIndex,d=t.getColumnWidth,m=t.getEstimatedTotalHeight,g=t.getEstimatedTotalWidth,I=t.getOffsetForColumnAndAlignment,M=t.getOffsetForRowAndAlignment,w=t.getRowHeight,x=t.getRowOffset,_=t.getRowStartIndexForOffset,C=t.getRowStopIndexForStartIndex,R=t.initInstanceProps,y=t.shouldResetStyleCacheOnItemSizeChange,O=t.validateProps;return(n=function(t){function n(e){var r;return(r=t.call(this,e)||this)._instanceProps=R(r.props,o(r)),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:o(r),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof r.props.initialScrollLeft?r.props.initialScrollLeft:0,scrollTop:"number"==typeof r.props.initialScrollTop?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=s((function(t,e,o,n,i,a,l,s){return r.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:o,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})})),r._callOnScroll=void 0,r._callOnScroll=s((function(t,e,o,n,i){return r.props.onScroll({horizontalScrollDirection:o,scrollLeft:t,scrollTop:e,verticalScrollDirection:n,scrollUpdateWasRequested:i})})),r._getItemStyle=void 0,r._getItemStyle=function(t,e){var o,n=r.props,i=n.columnWidth,l=n.direction,s=n.rowHeight,c=r._getItemStyleCache(y&&i,y&&l,y&&s),u=t+":"+e;if(c.hasOwnProperty(u))o=c[u];else{var f=a(r.props,e,r._instanceProps),h="rtl"===l;c[u]=o={position:"absolute",left:h?void 0:f,right:h?f:void 0,top:x(r.props,t,r._instanceProps),height:w(r.props,t,r._instanceProps),width:d(r.props,e,r._instanceProps)}}return o},r._getItemStyleCache=void 0,r._getItemStyleCache=s((function(t,e,r){return{}})),r._onScroll=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;r.setState((function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=r.props.direction,c=i;if("rtl"===e)switch(p()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-o));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&u(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=f(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1)}))},r}i(n,t),n.getDerivedStateFromProps=function(t,e){return S(t,e),O(t),null};var T=n.prototype;return T.scrollTo=function(t){var e=t.scrollLeft,r=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==r&&(r=Math.max(0,r)),this.setState((function(t){return void 0===e&&(e=t.scrollLeft),void 0===r&&(r=t.scrollTop),t.scrollLeft===e&&t.scrollTop===r?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:r,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<r?"forward":"backward"}}),this._resetIsScrollingDebounced)},T.scrollToItem=function(t){var e=t.align,r=void 0===e?"auto":e,o=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,u=this.state,f=u.scrollLeft,d=u.scrollTop,p=h();void 0!==o&&(o=Math.max(0,Math.min(o,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var v=m(this.props,this._instanceProps),S=g(this.props,this._instanceProps)>c?p:0,w=v>l?p:0;this.scrollTo({scrollLeft:void 0!==o?I(this.props,o,r,f,this._instanceProps,w):f,scrollTop:void 0!==n?M(this.props,n,r,d,this._instanceProps,S):d})},T.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,r=t.initialScrollTop;if(null!=this._outerRef){var o=this._outerRef;"number"==typeof e&&(o.scrollLeft=e),"number"==typeof r&&(o.scrollTop=r)}this._callPropsCallbacks()},T.componentDidUpdate=function(){var t=this.props.direction,e=this.state,r=e.scrollLeft,o=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===t)switch(p()){case"negative":n.scrollLeft=-r;break;case"positive-ascending":n.scrollLeft=r;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-r}else n.scrollLeft=Math.max(0,r);n.scrollTop=Math.max(0,o)}this._callPropsCallbacks()},T.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&u(this._resetIsScrollingTimeoutId)},T.render=function(){var t=this.props,o=t.children,n=t.className,i=t.columnCount,a=t.direction,l=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemData,d=t.itemKey,h=void 0===d?v:d,p=t.outerElementType,S=t.outerTagName,I=t.rowCount,M=t.style,w=t.useIsScrolling,x=t.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],y=C[1],O=this._getVerticalRangeToRender(),T=O[0],z=O[1],b=[];if(i>0&&I)for(var P=T;P<=z;P++)for(var W=R;W<=y;W++)b.push(e.createElement(o,{columnIndex:W,data:f,isScrolling:w?_:void 0,key:h({columnIndex:W,data:f,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=m(this.props,this._instanceProps),F=g(this.props,this._instanceProps);return e.createElement(p||S||"div",{className:n,onScroll:this._onScroll,ref:this._outerRefSetter,style:r({position:"relative",height:l,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},M)},e.createElement(c||u||"div",{children:b,ref:s,style:{height:D,pointerEvents:_?"none":void 0,width:F}}))},T._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,r=t.onItemsRendered,o=t.onScroll,n=t.rowCount;if("function"==typeof r&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),f=u[0],d=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,f,d,s,c,h,m)}if("function"==typeof o){var p=this.state,v=p.horizontalScrollDirection,g=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,M=p.verticalScrollDirection;this._callOnScroll(g,S,v,M,I)}},T._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanColumnCount,o=t.overscanColumnsCount,n=t.overscanCount,i=t.rowCount,a=this.state,s=a.horizontalScrollDirection,u=a.isScrolling,f=a.scrollLeft,d=r||o||n||1;if(0===e||0===i)return[0,0,0,0];var h=l(this.props,f,this._instanceProps),m=c(this.props,h,f,this._instanceProps),p=u&&"backward"!==s?1:Math.max(1,d),v=u&&"forward"!==s?1:Math.max(1,d);return[Math.max(0,h-p),Math.max(0,Math.min(e-1,m+v)),h,m]},T._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,r=t.overscanCount,o=t.overscanRowCount,n=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=o||n||r||1;if(0===e||0===i)return[0,0,0,0];var f=_(this.props,c,this._instanceProps),d=C(this.props,f,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(i-1,d+m)),f,d]},n}(e.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},n}var S=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},I=function(t,e){var r=t.rowCount,o=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},M=function(t,e){var r=t.columnCount,o=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},w=function(t,e,r,o){var n,i,a;if("column"===t?(n=o.columnMetadataMap,i=e.columnWidth,a=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=e.rowHeight,a=o.lastMeasuredRowIndex),r>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=r;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?o.lastMeasuredColumnIndex=r:o.lastMeasuredRowIndex=r}return n[r]},x=function(t,e,r,o){var n,i;return"column"===t?(n=r.columnMetadataMap,i=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=r.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=o?_(t,e,r,i,0,o):C(t,e,r,Math.max(0,i),o)},_=function(t,e,r,o,n,i){for(;n<=o;){var a=n+Math.floor((o-n)/2),l=w(t,e,a,r).offset;if(l===i)return a;l<i?n=a+1:l>i&&(o=a-1)}return n>0?n-1:0},C=function(t,e,r,o,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;o<i&&w(t,e,o,r).offset<n;)o+=a,a*=2;return _(t,e,r,Math.min(o,i-1),Math.floor(o/2),n)},R=function(t,e,r,o,n,i,a){var l="column"===t?e.width:e.height,s=w(t,e,r,i),c="column"===t?M(e,i):I(e,i),u=Math.max(0,Math.min(c-l,s.offset)),f=Math.max(0,s.offset-l+a+s.size);switch("smart"===o&&(o=n>=f-l&&n<=u+l?"auto":"center"),o){case"start":return u;case"end":return f;case"center":return Math.round(f+(u-f)/2);case"auto":default:return n>=f&&n<=u?n:f>u||n<f?f:u}},y=g({getColumnOffset:function(t,e,r){return w("column",t,e,r).offset},getColumnStartIndexForOffset:function(t,e,r){return x("column",t,r,e)},getColumnStopIndexForStartIndex:function(t,e,r,o){for(var n=t.columnCount,i=t.width,a=w("column",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=w("column",t,c,o).size;return c},getColumnWidth:function(t,e,r){return r.columnMetadataMap[e].size},getEstimatedTotalHeight:I,getEstimatedTotalWidth:M,getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){return R("column",t,e,r,o,n,i)},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){return R("row",t,e,r,o,n,i)},getRowOffset:function(t,e,r){return w("row",t,e,r).offset},getRowHeight:function(t,e,r){return r.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,r){return x("row",t,r,e)},getRowStopIndexForStartIndex:function(t,e,r,o){for(var n=t.rowCount,i=t.height,a=w("row",t,e,o),l=r+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)c++,s+=w("row",t,c,o).size;return c},initInstanceProps:function(t,e){var r=t,o={columnMetadataMap:{},estimatedColumnWidth:r.estimatedColumnWidth||50,estimatedRowHeight:r.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:r})},e.resetAfterRowIndex=function(t,r){void 0===r&&(r=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:r})},e.resetAfterIndices=function(t){var r=t.columnIndex,n=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof r&&(o.lastMeasuredColumnIndex=Math.min(o.lastMeasuredColumnIndex,r-1)),"number"==typeof n&&(o.lastMeasuredRowIndex=Math.min(o.lastMeasuredRowIndex,n-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),O=function(t,e){return t};function T(t){var n,a=t.getItemOffset,l=t.getEstimatedTotalSize,c=t.getItemSize,d=t.getOffsetForIndexAndAlignment,m=t.getStartIndexForOffset,v=t.getStopIndexForStartIndex,g=t.initInstanceProps,S=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return(n=function(t){function n(e){var r;return(r=t.call(this,e)||this)._instanceProps=g(r.props,o(r)),r._outerRef=void 0,r._resetIsScrollingTimeoutId=null,r.state={instance:o(r),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof r.props.initialScrollOffset?r.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},r._callOnItemsRendered=void 0,r._callOnItemsRendered=s((function(t,e,o,n){return r.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:o,visibleStopIndex:n})})),r._callOnScroll=void 0,r._callOnScroll=s((function(t,e,o){return r.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:o})})),r._getItemStyle=void 0,r._getItemStyle=function(t){var e,o=r.props,n=o.direction,i=o.itemSize,l=o.layout,s=r._getItemStyleCache(S&&i,S&&l,S&&n);if(s.hasOwnProperty(t))e=s[t];else{var u=a(r.props,t,r._instanceProps),f=c(r.props,t,r._instanceProps),d="horizontal"===n||"horizontal"===l,h="rtl"===n,m=d?u:0;s[t]=e={position:"absolute",left:h?void 0:m,right:h?m:void 0,top:d?0:u,height:d?"100%":f,width:d?f:"100%"}}return e},r._getItemStyleCache=void 0,r._getItemStyleCache=s((function(t,e,r){return{}})),r._onScrollHorizontal=function(t){var e=t.currentTarget,o=e.clientWidth,n=e.scrollLeft,i=e.scrollWidth;r.setState((function(t){if(t.scrollOffset===Math.round(n))return null;var e=r.props.direction,a=n;if("rtl"===e)switch(p()){case"negative":a=-n;break;case"positive-descending":a=i-o-n}return a=Math.max(0,Math.min(a,i-o)),{isScrolling:!0,scrollDirection:t.scrollOffset<a?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._onScrollVertical=function(t){var e=t.currentTarget,o=e.clientHeight,n=e.scrollHeight,i=e.scrollTop;r.setState((function(t){if(t.scrollOffset===Math.round(i))return null;var e=Math.max(0,Math.min(i,n-o));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}}),r._resetIsScrollingDebounced)},r._outerRefSetter=function(t){var e=r.props.outerRef;r._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},r._resetIsScrollingDebounced=function(){null!==r._resetIsScrollingTimeoutId&&u(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=f(r._resetIsScrolling,150)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},(function(){r._getItemStyleCache(-1,null)}))},r}i(n,t),n.getDerivedStateFromProps=function(t,e){return z(t,e),I(t),null};var M=n.prototype;return M.scrollTo=function(t){t=Math.max(0,t),this.setState((function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},M.scrollToItem=function(t,e){void 0===e&&(e="auto");var r=this.props,o=r.itemCount,n=r.layout,i=this.state.scrollOffset;t=Math.max(0,Math.min(t,o-1));var a=0;if(this._outerRef){var l=this._outerRef;a="vertical"===n?l.scrollWidth>l.clientWidth?h():0:l.scrollHeight>l.clientHeight?h():0}this.scrollTo(d(this.props,t,e,i,this._instanceProps,a))},M.componentDidMount=function(){var t=this.props,e=t.direction,r=t.initialScrollOffset,o=t.layout;if("number"==typeof r&&null!=this._outerRef){var n=this._outerRef;"horizontal"===e||"horizontal"===o?n.scrollLeft=r:n.scrollTop=r}this._callPropsCallbacks()},M.componentDidUpdate=function(){var t=this.props,e=t.direction,r=t.layout,o=this.state,n=o.scrollOffset;if(o.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===r)if("rtl"===e)switch(p()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},M.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&u(this._resetIsScrollingTimeoutId)},M.render=function(){var t=this.props,o=t.children,n=t.className,i=t.direction,a=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemCount,d=t.itemData,h=t.itemKey,m=void 0===h?O:h,p=t.layout,v=t.outerElementType,g=t.outerTagName,S=t.style,I=t.useIsScrolling,M=t.width,w=this.state.isScrolling,x="horizontal"===i||"horizontal"===p,_=x?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),R=C[0],y=C[1],T=[];if(f>0)for(var z=R;z<=y;z++)T.push(e.createElement(o,{data:d,key:m(z,d),index:z,isScrolling:I?w:void 0,style:this._getItemStyle(z)}));var b=l(this.props,this._instanceProps);return e.createElement(v||g||"div",{className:n,onScroll:_,ref:this._outerRefSetter,style:r({position:"relative",height:a,width:M,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},S)},e.createElement(c||u||"div",{children:T,ref:s,style:{height:x?"100%":b,pointerEvents:w?"none":void 0,width:x?b:"100%"}}))},M._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],r=t[1],o=t[2],n=t[3];this._callOnItemsRendered(e,r,o,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},M._getRangeToRender=function(){var t=this.props,e=t.itemCount,r=t.overscanCount,o=this.state,n=o.isScrolling,i=o.scrollDirection,a=o.scrollOffset;if(0===e)return[0,0,0,0];var l=m(this.props,a,this._instanceProps),s=v(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,r),u=n&&"forward"!==i?1:Math.max(1,r);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},n}(e.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},n}var z=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},b=function(t,e,r){var o=t.itemSize,n=r.itemMetadataMap,i=r.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=o(s);n[s]={offset:a,size:c},a+=c}r.lastMeasuredIndex=e}return n[e]},P=function(t,e,r,o,n){for(;o<=r;){var i=o+Math.floor((r-o)/2),a=b(t,i,e).offset;if(a===n)return i;a<n?o=i+1:a>n&&(r=i-1)}return o>0?o-1:0},W=function(t,e,r,o){for(var n=t.itemCount,i=1;r<n&&b(t,r,e).offset<o;)r+=i,i*=2;return P(t,e,Math.min(r,n-1),Math.floor(r/2),o)},D=function(t,e){var r=t.itemCount,o=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=r&&(i=r-1),i>=0){var l=o[i];a=l.offset+l.size}return a+(r-i-1)*n},F=T({getItemOffset:function(t,e,r){return b(t,e,r).offset},getItemSize:function(t,e,r){return r.itemMetadataMap[e].size},getEstimatedTotalSize:D,getOffsetForIndexAndAlignment:function(t,e,r,o,n,i){var a=t.direction,l=t.height,s=t.layout,c=t.width,u="horizontal"===a||"horizontal"===s?c:l,f=b(t,e,n),d=D(t,n),h=Math.max(0,Math.min(d-u,f.offset)),m=Math.max(0,f.offset-u+f.size+i);switch("smart"===r&&(r=o>=m-u&&o<=h+u?"auto":"center"),r){case"start":return h;case"end":return m;case"center":return Math.round(m+(h-m)/2);case"auto":default:return o>=m&&o<=h?o:o<m?m:h}},getStartIndexForOffset:function(t,e,r){return function(t,e,r){var o=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?o[n].offset:0)>=r?P(t,e,n,0,r):W(t,e,Math.max(0,n),r)}(t,r,e)},getStopIndexForStartIndex:function(t,e,r,o){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=b(t,e,o),f=r+c,d=u.offset+u.size,h=e;h<a-1&&d<f;)h++,d+=b(t,h,o).size;return h},initInstanceProps:function(t,e){var r={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,o){void 0===o&&(o=!0),r.lastMeasuredIndex=Math.min(r.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),o&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),L=g({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,r,o,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),f=Math.max(0,e*l-s+i+l);switch("smart"===r&&(r=o>=f-s&&o<=u+s?"auto":"center"),r){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;case"auto":default:return o>=f&&o<=u?o:f>u||o<f?f:u}},getOffsetForRowAndAlignment:function(t,e,r,o,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),f=Math.max(0,e*a-l+i+a);switch("smart"===r&&(r=o>=f-l&&o<=u+l?"auto":"center"),r){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(l/2)?0:d>c+Math.floor(l/2)?c:d;case"auto":default:return o>=f&&o<=u?o:f>u||o<f?f:u}},getColumnStartIndexForOffset:function(t,e){var r=t.columnWidth,o=t.columnCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getColumnStopIndexForStartIndex:function(t,e,r){var o=t.columnWidth,n=t.columnCount,i=t.width,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var r=t.rowHeight,o=t.rowCount;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getRowStopIndexForStartIndex:function(t,e,r){var o=t.rowHeight,n=t.rowCount,i=t.height,a=e*o,l=Math.ceil((i+r-a)/o);return Math.max(0,Math.min(n-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),H=T({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,r,o,n,i){var a=t.direction,l=t.height,s=t.itemCount,c=t.itemSize,u=t.layout,f=t.width,d="horizontal"===a||"horizontal"===u?f:l,h=Math.max(0,s*c-d),m=Math.min(h,e*c),p=Math.max(0,e*c-d+c+i);switch("smart"===r&&(r=o>=p-d&&o<=m+d?"auto":"center"),r){case"start":return m;case"end":return p;case"center":var v=Math.round(p+(m-p)/2);return v<Math.ceil(d/2)?0:v>h+Math.floor(d/2)?h:v;case"auto":default:return o>=p&&o<=m?o:o<p?p:m}},getStartIndexForOffset:function(t,e){var r=t.itemCount,o=t.itemSize;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getStopIndexForStartIndex:function(t,e,r){var o=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===o||"horizontal"===l?s:n,f=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function k(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}function A(t,e){for(var r in t)if(!(r in e))return!0;for(var o in e)if(t[o]!==e[o])return!0;return!1}var E=["style"],U=["style"];function q(t,e){var r=t.style,o=k(t,E),n=e.style,i=k(e,U);return!A(r,n)&&!A(o,i)}t.FixedSizeGrid=L,t.FixedSizeList=H,t.VariableSizeGrid=y,t.VariableSizeList=F,t.areEqual=q,t.shouldComponentUpdate=function(t,e){return!q(this.props,t)||A(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index-prod.umd.js.map
