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
exports.AuthorEventEntity = void 0;
var typeorm_1 = require("typeorm");
var common_1 = require("../../entity/common");
// import { AuthorEntity } from "./authors.entity";
// import {BookEntity} from "../../projects/entity/book.entity";
var AuthorEventEntity = /** @class */ (function (_super) {
    __extends(AuthorEventEntity, _super);
    function AuthorEventEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({
            name: "id",
            type: "int",
        }),
        __metadata("design:type", Number)
    ], AuthorEventEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('int', {
            name: "author_id",
        }),
        __metadata("design:type", Number)
    ], AuthorEventEntity.prototype, "author_id", void 0);
    __decorate([
        (0, typeorm_1.Column)("int", {
            name: "event_id",
        }),
        __metadata("design:type", Number)
    ], AuthorEventEntity.prototype, "event_id", void 0);
    AuthorEventEntity = __decorate([
        (0, typeorm_1.Entity)("author_event")
    ], AuthorEventEntity);
    return AuthorEventEntity;
}(common_1.Common));
exports.AuthorEventEntity = AuthorEventEntity;
//# sourceMappingURL=authors.event.entity.js.map