import { IDictionary, IList } from './core/container';
import { Base } from './core/Base';

interface IShaderAttribSemantic {
    symbol: string;
    type: string;
}

interface IShaderMatrixSemantic {
    symbol: string;
    type: string;
    isTranspose: boolean;
    semanticNoTranspose: string;
}

interface IShaderUniformTemplate {
    type: string;
    value: Function;
    semantic: string;
}

interface IShaderAttributeTemplate {
    type: string;
    size: number;
    semantic: string;
}

export interface IShaderUniform {
    type: string;
    value: any;
}

interface ILightNumber {
    AMBIENT_LIGHT : number;
    POINT_LIGHT: number;
    SPOT_LIGHT: number;
    AREA_LIGHT: number;
}

interface  IShaderOption {
    vertex?: string;
    fragment?: string;
}

export class Shader extends Base {

    constructor(option?: IShaderOption);

    vertex: string;

    fragment: string;

    attribSemantics: IDictionary<IShaderAttribSemantic>;

    matrixSemantics: IDictionary<IShaderMatrixSemantic>;

    matrixSemanticKeys: string[];

    uniformTemplates: IDictionary<IShaderUniformTemplate>;

    attributeTemplates: IDictionary<IShaderAttributeTemplate>;

    vertexDefines: IDictionary<any>;

    fragmentDefines: IDictionary<any>;

    clone(): Shader;

    createUniforms(): IDictionary<IShaderUniform>;

    static import(shaderStr: string): void;

    static source(name: string): string;
}