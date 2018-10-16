/// <reference types="node" />
import { BlendFunc } from '../enums/BlendFunc';
import { SourcePattern } from '../enums/SourcePattern';
import { Vector3 } from './Vector3';
import { UUID } from './UUID';
import { ParticleDataFlags } from '../enums/ParticleDataFlags';
import { Color4 } from './Color4';
export declare class ParticleSystem {
    startGlow: number;
    endGlow: number;
    blendFuncSource: BlendFunc;
    blendFuncDest: BlendFunc;
    crc: number;
    pattern: SourcePattern;
    maxAge: number;
    startAge: number;
    innerAngle: number;
    outerAngle: number;
    burstRate: number;
    burstRadius: number;
    burstSpeedMin: number;
    burstSpeedMax: number;
    burstPartCount: number;
    angularVelocity: Vector3;
    acceleration: Vector3;
    texture: UUID;
    target: UUID;
    dataFlags: ParticleDataFlags;
    partMaxAge: number;
    startColor: Color4;
    endColor: Color4;
    startScaleX: number;
    startScaleY: number;
    endScaleX: number;
    endScaleY: number;
    flags: number;
    static unpackFixed(buf: Buffer, pos: number, signed: boolean, intBits: number, fracBits: number): number;
    constructor(buf: Buffer, pos: number);
    unpackSystem(buf: Buffer, pos: number): number;
    unpackLegacyData(buf: Buffer, pos: number): number;
}
