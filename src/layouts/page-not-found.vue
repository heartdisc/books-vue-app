<template>
    <div class="code-area">
        <span class="comment">// 404 - page not found</span>
        <span>
            <span class="red">if</span>(<span class="light-blue">!</span><span class="light italic">found</span>) {
        </span>
        <span>
            <span class="indent blue">throw</span><span>(<span class="yellow">"(╯°□°)╯︵ ┻━┻"</span>);</span>
        </span>
        <span>}</span>
    </div>
</template>

<script>
    export default {
        name: 'PageNotFound',
    }
</script>

<style lang="scss" scoped>
// html {
//         font-size: 16px;
//     }
//     html, body {
//         width: 100%;
//         height: 100%;
//     }
//     body {
//         margin: 0;
//         background: #081421;
//         color: #d3d7de;
//         font-family: "Liberation Mono",SFMono-Regular,Consolas,Menlo,Courier,monospace;
//         font-size: 1.125rem;
//         line-height: 1.5em;
//         cursor: default;
//     }
    .code-area {
        position: absolute;
        width: 320px;
        min-width: 320px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .code-area > span {
        display: block;
    }
    @media screen and (max-width: 320px) {
        .code-area {
            font-size: 5vw;
            min-width: auto;
            width: 95%;
            margin: auto;
            padding: 5px;
            padding-left: 10px;
            line-height: 6.5vw;
        }
    }
    .comment {
        color: #777;
        font-style: italic;
    }
    .red {
        color: #d65562;
    }
    .light-blue {
        color: #4ca8ef;
    }
    .blue {
        color: #2796ec;
    }
    .light {
        color: #bdbdbd;
    }
    .italic {
        font-style: italic;
    }
    .indent {
        padding-left: 2rem;
    }
    .yellow {
        color: #a6a61f;
    }
</style>