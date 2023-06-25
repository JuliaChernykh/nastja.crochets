export const openEmailClient = (email: string, subject: string, text: string): void => {
    document.location = `mailto:${email}?subject=${subject}&body=${text}`;
}
