"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassParser = void 0;
const types_1 = require("../../types");
const misc_1 = require("../misc");
const Parser_1 = require("../Parser");
const type_parsers_1 = require("../type-parsers");
const ClassConstructorParser_1 = require("./ClassConstructorParser");
const ClassMethodParser_1 = require("./ClassMethodParser");
const ClassPropertyParser_1 = require("./ClassPropertyParser");
/**
 * Parses data from a class reflection.
 * @since 1.0.0
 */
class ClassParser extends Parser_1.Parser {
    constructor(data) {
        super(data);
        /**
         * The comment parser of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "comment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Whether this class is external.
         * @since 1.0.0
         */
        Object.defineProperty(this, "external", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Whether this class is abstract.
         * @since 1.0.0
         */
        Object.defineProperty(this, "abstract", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The `extends` type of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "extendsType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The `implements` type of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "implementsType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The type parameter parsers of this class.
         * @since 6.0.0
         */
        Object.defineProperty(this, "typeParameters", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The constructor parser of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "construct", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The property parsers of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "properties", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The method parsers of this class.
         * @since 1.0.0
         */
        Object.defineProperty(this, "methods", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const { comment, external, abstract, extendsType, implementsType, typeParameters, construct, properties, methods } = data;
        this.comment = comment;
        this.external = external;
        this.abstract = abstract;
        this.extendsType = extendsType;
        this.implementsType = implementsType;
        this.typeParameters = typeParameters;
        this.construct = construct;
        this.properties = properties;
        this.methods = methods;
    }
    /**
     * Converts this parser to a Json compatible format.
     * @since 1.0.0
     * @returns The Json compatible format of this parser.
     */
    toJSON() {
        return {
            ...super.toJSON(),
            comment: this.comment.toJSON(),
            external: this.external,
            abstract: this.abstract,
            extendsType: this.extendsType ? this.extendsType.toJSON() : null,
            implementsType: this.implementsType.map((implementsType) => implementsType.toJSON()),
            typeParameters: this.typeParameters.map((typeParameter) => typeParameter.toJSON()),
            construct: this.construct ? this.construct.toJSON() : null,
            properties: this.properties,
            methods: this.methods
        };
    }
    /**
     * Generates a new {@link ClassParser} instance from the given data.
     * @since 1.0.0
     * @param reflection The reflection to generate the parser from.
     * @returns The generated parser.
     */
    static generateFromTypeDoc(reflection) {
        const { kind, kindString = 'Unknown', id, name, comment = { summary: [] }, sources = [], flags, children = [], extendedTypes = [], implementedTypes = [], typeParameters = [] } = reflection;
        if (kind !== types_1.ReflectionKind.Class)
            console.error(`${name}: Expected Project (${types_1.ReflectionKind.Project}), but received ${kindString} (${kind})`);
        const construct = children.find((child) => child.kind === types_1.ReflectionKind.Constructor);
        if (construct === undefined)
            console.error(`${name}: Expected Class (${types_1.ReflectionKind.Class}) with a constructor, but there was none`);
        const properties = children
            .filter((child) => child.kind === types_1.ReflectionKind.Property || (child.kind === types_1.ReflectionKind.Accessor && child.getSignature))
            .map((child) => ClassPropertyParser_1.ClassPropertyParser.generateFromTypeDoc(child, id));
        const methods = children.filter((child) => child.kind === types_1.ReflectionKind.Method).map((child) => ClassMethodParser_1.ClassMethodParser.generateFromTypeDoc(child, id));
        return new ClassParser({
            id,
            name,
            comment: misc_1.CommentParser.generateFromTypeDoc(comment),
            source: sources.length ? misc_1.SourceParser.generateFromTypeDoc(sources[0]) : null,
            external: Boolean(flags.isExternal),
            abstract: Boolean(flags.isAbstract),
            extendsType: extendedTypes.length ? type_parsers_1.TypeParser.generateFromTypeDoc(extendedTypes[0]) : null,
            implementsType: implementedTypes.map((implementedType) => type_parsers_1.TypeParser.generateFromTypeDoc(implementedType)),
            typeParameters: typeParameters.map((typeParameter) => misc_1.TypeParameterParser.generateFromTypeDoc(typeParameter)),
            construct: construct ? ClassConstructorParser_1.ClassConstructorParser.generateFromTypeDoc(construct, id) : null,
            properties,
            methods
        });
    }
    /**
     * Generates a new {@link ClassParser} instance from the given data.
     * @param json The json to generate the parser from.
     * @returns The generated parser.
     */
    static generateFromJson(json) {
        const { id, name, comment, source, external, abstract, extendsType, implementsType, typeParameters, construct, properties, methods } = json;
        return new ClassParser({
            id,
            name,
            comment: misc_1.CommentParser.generateFromJson(comment),
            source: source ? misc_1.SourceParser.generateFromJson(source) : null,
            external,
            abstract,
            extendsType: extendsType ? type_parsers_1.TypeParser.generateFromJson(extendsType) : null,
            implementsType: implementsType.map((implementedType) => type_parsers_1.TypeParser.generateFromJson(implementedType)),
            typeParameters: typeParameters.map((typeParameter) => misc_1.TypeParameterParser.generateFromJson(typeParameter)),
            construct: ClassConstructorParser_1.ClassConstructorParser.generateFromJson(construct),
            properties: properties.map((property) => ClassPropertyParser_1.ClassPropertyParser.generateFromJson(property)),
            methods: methods.map((method) => ClassMethodParser_1.ClassMethodParser.generateFromJson(method))
        });
    }
}
exports.ClassParser = ClassParser;
(function (ClassParser) {
    /**
     * The accessibility types of a class.
     * @since 1.0.0
     */
    let Accessibility;
    (function (Accessibility) {
        Accessibility["Public"] = "public";
        Accessibility["Protected"] = "protected";
        Accessibility["Private"] = "private";
    })(Accessibility = ClassParser.Accessibility || (ClassParser.Accessibility = {}));
})(ClassParser = exports.ClassParser || (exports.ClassParser = {}));
//# sourceMappingURL=ClassParser.js.map