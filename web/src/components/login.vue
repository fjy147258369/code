<template>
    <div class="login">
        <div class="login_box">
            <ul>
                <li>
                    <h1>登入</h1>
                </li>
                <li>
                    <input type="text" placeholder="请输入账号" />
                </li>
                <li>
                    <input type="text" placeholder="请输入密码" />
                </li>
                <li>
                    <button>登录</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            password: ""
        };
    }
};
</script>


<style lang="less" scoped>
.login {
    .login_box {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        ul {
            position: fixed;
            width: 350px;
            height: 400px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            border-radius: 4px;
            padding: 24px;
            li {
                text-align: center;
                margin: 15px 0;
                h1 {
                    font-size: 18px;
                    color: #333;
                }
                input {
                    padding: 10px;
                    width: 100%;
                    border: 1px solid #e9e9e9;
                    border-radius: 2px;
                    box-sizing: border-box;
                }
                button {
                    width: 100%;
                    height: 40px;
                    background-color: #007fff;
                    border-radius: 2px;
                    outline: none;
                    cursor: pointer;
                    border: none;
                    color: #fff;
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>
