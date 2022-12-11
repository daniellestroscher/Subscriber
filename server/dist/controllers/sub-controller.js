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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import db from '../models/sub-model.js';
export function getAllSubs(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var subscriptions, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, db.find().sort({ reminderDate: -1 })];
                case 1:
                    subscriptions = _a.sent();
                    res.send(subscriptions);
                    res.status(200);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.log('ERROR in SUB controller GET from db', err_1);
                    res.status(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function postOneSub(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var sub, createdSub, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    sub = req.body;
                    return [4 /*yield*/, db.create({
                            icon: sub.icon,
                            price: sub.price,
                            title: sub.title,
                            start: sub.start,
                            prettyStart: sub.prettyStart,
                            cycle: sub.cycle,
                            reminderDate: sub.reminderDate,
                        })];
                case 1:
                    createdSub = _a.sent();
                    res.status(201);
                    res.send(createdSub);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.log('ERROR in SUB controller POST from db', err_2);
                    res.status(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function editSub(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var updates, query, updatedSub, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    updates = req.body;
                    query = { _id: updates._id };
                    return [4 /*yield*/, db.findOneAndUpdate(query, {
                            icon: updates.icon,
                            price: updates.price,
                            title: updates.title,
                            start: updates.start,
                            prettyStart: updates.prettyStart,
                            cycle: updates.cycle,
                            reminderDate: updates.reminderDate,
                        }, { new: true })];
                case 1:
                    updatedSub = _a.sent();
                    res.status(201);
                    res.send(updatedSub);
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    console.log('ERROR in SUB controller PUT from db', err_3);
                    res.status(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function deleteSub(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var subId, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    subId = req.body.id;
                    return [4 /*yield*/, db.findOneAndDelete({ _id: subId })];
                case 1:
                    _a.sent();
                    res.sendStatus(202);
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log('ERROR in SUB controller DELETE from db', err_4);
                    res.status(500);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
