<template>
    <div class="hello">
        <ul>
            <li>
                <label>账号：</label>
                <div>
                    <input type="text" />
                </div>
            </li>
            <li>
                <label>密码：</label>
                <div>
                    <input type="text" />
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HelloWorld"
};
</script>


<style lang="less" scoped>
.hello {
    ul {
        background: red;
    }
}
</style>
