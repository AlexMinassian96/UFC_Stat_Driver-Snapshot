import Events from './files/Events.json'
import Fighters from './files/Fighters.json'

type DataType = "Events" | "Fighters"

const mapId = <T>(key: keyof T) => (index: T) => {
    index['id' as keyof T] = index[key]
}

export function getData<T>(data: T, idKey?: keyof T, timeout?: number): Promise<T>;
export function getData<T>(dataType: DataType, timeout?: number): Promise<T>;
export function getData<T>(arg: T | DataType, idKey?: keyof T, timeout?: number): Promise<T> {
    let data = {} as T;
    switch(arg) {
        case "Events":
            data = Events as T;
            break;
        case "Fighters":
            data = Fighters as T;
            if (Array.isArray(data)) {
                data.forEach(mapId<T>('FighterId' as keyof T))
            } else {
                mapId<T>('FighterId' as keyof T)(data);
            }
            break;
        default:
            data = arg;
    }
    return new Promise(( resolve ) => setTimeout(() => resolve(data as T), timeout || 1000));
}