"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePracticeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_practice_dto_1 = require("./create-practice.dto");
class UpdatePracticeDto extends (0, mapped_types_1.PartialType)(create_practice_dto_1.CreatePracticeDto) {
}
exports.UpdatePracticeDto = UpdatePracticeDto;
//# sourceMappingURL=update-practice.dto.js.map