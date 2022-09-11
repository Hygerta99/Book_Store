"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorEventController = void 0;
var typeorm_1 = require("typeorm");
var author_entity_1 = require("../entity/author.entity");
var author_event_service_1 = require("../services/author.event.service");
var AuthorEventController = /** @class */ (function () {
    function AuthorEventController() {
    }
    var _a;
    _a = AuthorEventController;
    AuthorEventController.getAuthorEvent = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var author_events, e_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, author_event_service_1.AuthorEventService.getAuthorEvent(request)];
                case 1:
                    author_events = _b.sent();
                    return [2 /*return*/, response.send({ author_events: author_events.map(function (author_event) { return author_event.toObjectResponse(); }) })];
                case 2:
                    e_1 = _b.sent();
                    console.log(e_1);
                    return [2 /*return*/, response.send({ status: 500, message: "Server error" })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    AuthorEventController.insertAuthorEvent = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var user, e_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, author_event_service_1.AuthorEventService.insertAuthorEvent(request)];
                case 1:
                    user = _b.sent();
                    return [2 /*return*/, response.status(200).send({ message: 'Success', user: user })];
                case 2:
                    e_2 = _b.sent();
                    console.log(e_2);
                    return [2 /*return*/, response.send({ status: 500, message: "Server error" })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    AuthorEventController.updateAuthorEvent = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var authorId, repository, author, savedRes, error_1;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    authorId = +request.params.authorId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, , 8]);
                    if (!!authorId) return [3 /*break*/, 2];
                    return [2 /*return*/, response.send({ status: 400, message: 'authorId is not provided' })];
                case 2:
                    repository = (0, typeorm_1.getRepository)(author_entity_1.AuthorEntity);
                    return [4 /*yield*/, repository.findOne({ id: authorId })];
                case 3:
                    author = _b.sent();
                    return [4 /*yield*/, repository.merge(author, request.body)];
                case 4:
                    savedRes = _b.sent();
                    return [4 /*yield*/, repository.save(savedRes)];
                case 5:
                    _b.sent();
                    return [2 /*return*/, response.send({ status: 200, message: "User with id ".concat(authorId, " saved successfully") })];
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [2 /*return*/, response.send({ status: 500, message: "Server error" })];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    AuthorEventController.deleteAuthorEvent = function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
        var authorId, repository, error_2;
        return __generator(_a, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    authorId = +request.params.authorId;
                    repository = (0, typeorm_1.getRepository)(author_entity_1.AuthorEntity);
                    return [4 /*yield*/, repository.delete({ id: authorId })];
                case 1:
                    _b.sent();
                    return [2 /*return*/, response.send({ status: 200, message: 'Success' })];
                case 2:
                    error_2 = _b.sent();
                    console.log(error_2);
                    return [2 /*return*/, response.send({ status: 500, message: "Server error" })];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return AuthorEventController;
}());
exports.AuthorEventController = AuthorEventController;
//# sourceMappingURL=author.event.controller.js.map