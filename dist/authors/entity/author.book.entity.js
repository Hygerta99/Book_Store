"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorBookEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
var author_entity_1 = require("./author.entity");
var book_entity_1 = require("../../books/entity/book.entity");
var AuthorBookEntity = /** @class */ (function (_super) {
    __extends(AuthorBookEntity, _super);
    function AuthorBookEntity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toObjectResponse = function () {
            return {
                id: _this.id,
                title: _this.book.title,
                name: _this.author.name,
                nrPages: _this.book.nr_pages,
                genre: _this.book.genre
            };
        };
        return _this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], AuthorBookEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "author_id",
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], AuthorBookEntity.prototype, "author_id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "book_id",
            nullable: false,
        }),
        __metadata("design:type", Number)
    ], AuthorBookEntity.prototype, "book_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return author_entity_1.AuthorEntity; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)({ name: 'author_id' }),
        __metadata("design:type", author_entity_1.AuthorEntity)
    ], AuthorBookEntity.prototype, "author", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return book_entity_1.BookEntity; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)({ name: 'book_id' }),
        __metadata("design:type", book_entity_1.BookEntity)
    ], AuthorBookEntity.prototype, "book", void 0);
    AuthorBookEntity = __decorate([
        (0, typeorm_1.Entity)("author_book")
    ], AuthorBookEntity);
    return AuthorBookEntity;
}(common_1.Common));
exports.AuthorBookEntity = AuthorBookEntity;
//# sourceMappingURL=author.book.entity.js.map