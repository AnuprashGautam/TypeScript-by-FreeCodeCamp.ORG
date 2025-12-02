interface Camera {
    modelName: string;
    version: string;
    megaPixel: string;

    cameraHelpGuide(): string;
}

interface Battery {
    modelName: string;
    version: string;
    mah: number;

    batteryHelpGuide(): string;  // ← Fixed syntax error
}

class IPhone implements Camera, Battery {

    // You must define all properties of both interfaces
    modelName: string;
    version: string;
    megaPixel: string;
    mah: number;

    constructor(modelName: string, version: string, megaPixel: string, mah: number) {
        this.modelName = modelName;
        this.version = version;
        this.megaPixel = megaPixel;
        this.mah = mah;
    }

    // Implement all methods
    cameraHelpGuide(): string {
        return `This is the camera guide for iPhone ${this.modelName}.`;
    }

    batteryHelpGuide(): string {
        return `This is the battery guide. Battery: ${this.mah}mAh.`;
    }
}

class Android implements Camera, Battery {

    modelName: string;
    version: string;
    megaPixel: string;
    mah: number;

    constructor(modelName: string, version: string, megaPixel: string, mah: number) {
        this.modelName = modelName;
        this.version = version;
        this.megaPixel = megaPixel;
        this.mah = mah;
    }

    cameraHelpGuide(): string {
        return `This is the camera guide for Android ${this.modelName}.`;
    }

    batteryHelpGuide(): string {
        return `This is the battery guide. Battery: ${this.mah}mAh.`;
    }
}
