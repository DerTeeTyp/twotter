<template>
    <div class="twoot-item">
        <div class="twoot-item_user">
            @{{username}}
        </div>
        <div class="twoot-item_content">
            {{twoot.content}}
        </div>
    </div>
</template>

<script>
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: Object,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
.twoot-item {
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot-item_user {
        font-weight: bold;
    }
}
</style>