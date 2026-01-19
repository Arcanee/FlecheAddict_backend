import { HttpStatus } from '#src/lib/models/http.ts';

export class HttpException extends Error {
  readonly statusCode: number;

  constructor(code: number, message: string) {
    super(message);
    this.statusCode = code;
  }
}

export class BadGateway extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.BAD_GATEWAY, message ?? 'Bad Gateway');
  }
}

export class BadRequestException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.BAD_REQUEST, message ?? 'Bad Request');
  }
}

export class ForbiddenException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.FORBIDDEN, message ?? 'Forbidden');
  }
}

export class GatewayTimeoutException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.GATEWAY_TIMEOUT, message ?? 'Gateway Timeout');
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message ?? 'Internal Server Error');
  }
}

export class NotFoundException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.NOT_FOUND, message ?? 'Not Found');
  }
}

export class UnauthorizedException extends HttpException {
  constructor(message?: string) {
    super(HttpStatus.UNAUTHORIZED, message ?? 'Unauthorized');
  }
}

