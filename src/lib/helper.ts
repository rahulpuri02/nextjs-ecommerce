export const generateFolderName = (prefix: string = '', length: number = 6): string => {
     if(prefix){
        prefix = prefix.toLowerCase().split(' ').join('-')
     }
    const random = Math.random().toString(36).substring(2, length + 2);
    return `${prefix}${prefix ? '-' : ''}${random}`;
}