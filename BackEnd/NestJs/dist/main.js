"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function App() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        exceptionFactory(errors) {
            const message = errors.map((error) => Object.values(error.constraints ?? {}).join(', '))[0];
            return new common_1.BadRequestException(message);
        },
    }));
    await app.listen(9999);
    console.log('connect');
}
App();
//# sourceMappingURL=main.js.map