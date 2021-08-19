export const setPlatform = (type: string): void => {
    localStorage.setItem('platform', type);
}

export const getPlatform = (): string => {
    return localStorage.getItem('platform');
}

export const isClient = (): boolean => {
    const role = getPlatform();
    return role === 'client' ? true: false;
}

export const isLoggedIn = (): boolean => {
    return localStorage.getItem('isAuthenticated')
}