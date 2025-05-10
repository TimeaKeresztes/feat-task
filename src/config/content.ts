type Content = {
    globalTitle: string
    globalDescription: string
    loginHeader: string
    loginDescription: string
    emailLabel: string //Igazából mivel u.a angolul is meg magyarul is, ez redundáns, de a konzisztencia miatt itt hagyom :)
    passwordLabel: string
    rememberMeLabel: string
    forgotPasswordLabel: string
    loginButtonLabel: string
    notAppliedYetLabel: string
    createAccountLabel: string
}

export const content_english: Content = {
    globalTitle: 'Any program is only as good as it is useful',
    globalDescription: 'The aim is to consistently craft pixel-perfect and high-performance solutions',
    loginHeader: 'Join to',
    loginDescription: 'See what will going to happen with your life.',
    emailLabel: 'Email',
    passwordLabel: 'Password',
    rememberMeLabel: 'Remember me',
    forgotPasswordLabel: 'Forgot Password?',
    loginButtonLabel: 'Login',
    notAppliedYetLabel: 'Not applied yet?',
    createAccountLabel: 'Create an account',
}
export const content_hungarian: Content = {
    globalTitle: 'Egy program annyira jó amennyire hasznos',
    globalDescription: 'A cél a pixel-pontos és gyors megoldások készítése',
    loginHeader: 'Irány a',
    loginDescription: 'Nézzük meg, hogy mi történik az életeddel.',
    emailLabel: 'Email',
    passwordLabel: 'Jelszó',
    rememberMeLabel: 'Emlékezz rám',
    forgotPasswordLabel: 'Elfelejtettem a jelszavam.',
    loginButtonLabel: 'Belépés',
    notAppliedYetLabel: 'Nincs fiókja?',
    createAccountLabel: 'Hozzon létre egyet!',
}
