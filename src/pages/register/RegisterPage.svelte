<script lang="ts">
    import {
        FluidForm,
        TextInput,
        PasswordInput,
        Button,
        InlineNotification,
    } from "carbon-components-svelte";
    import { router } from "../../router/router";
    import { query, mutation } from "svelte-apollo";

    import MinimalView from "../../view/minimal/MinimalView.svelte";

    import {
        RegisterationsAllowed,
        RegisterationsAllowedQuery,
        CreateNewUser,
        CreateNewUserMutation,
        CreateNewUserMutationVariables,
        NewUser,
    } from "../../generated/graphql";

    const allowed = query<RegisterationsAllowedQuery>(RegisterationsAllowed);
    $: disabled =
        !$allowed.loading &&
        !$allowed.error &&
        !$allowed.data.registerationsAllowed;

    const createUser = mutation<
        CreateNewUserMutation,
        CreateNewUserMutationVariables
    >(CreateNewUser);

    let newUser: NewUser = {
        email: "",
        username: "",
        password: "",
    };

    async function submitNewUser() {
        try {
            let user = await createUser({
                variables: {
                    newUser,
                },
            });
            console.log(user.errors);
            console.log(user.data);
            console.log(user.extensions);
        } catch (e) {
            error = e;
        }
    }

    let error: string | null;
</script>

<MinimalView pageTitle="Register">
    <div
        style="width: 600px; position: absolute; top: 50%; left: 50%; margin-right: -50%; transform: translate(-50%, -50%);"
    >
        {#if disabled}
            <InlineNotification
                hideCloseButton
                kind="warning"
                title="Feature disabled"
                subtitle="Registerations are not allowed."
            />
        {/if}
        <FluidForm>
            <TextInput
                labelText="Username"
                {disabled}
                bind:value={newUser.username}
            />
            <TextInput
                labelText="Email (optional)"
                {disabled}
                bind:value={newUser.email}
            />
            <PasswordInput
                labelText="Password"
                {disabled}
                bind:value={newUser.password}
            />
            <Button style="float: right;" {disabled} on:click={submitNewUser}
                >Create user</Button
            >
            <Button
                style="float: right;"
                kind="ghost"
                on:click={() => router.toPath("/login")}
                >Have an account? Log in here.</Button
            >
        </FluidForm>
        {#if error}
            <InlineNotification
                hideCloseButton
                kind="error"
                title="Invalid input"
                subtitle={error}
            />
        {/if}
    </div>
</MinimalView>
