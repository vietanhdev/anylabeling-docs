# AnyLabeling documentation

This repository contains the source for the [AnyLabeling documentation](https://anylabeling.nrl.ai/).

AnyLabeling combines image annotation tools with AI-assisted labeling from YOLO and the Segment Anything family, including SAM, MobileSAM, SAM 2/2.1, and SAM 3.

## Current release

The current stable release is [v0.4.42](https://github.com/vietanhdev/anylabeling/releases/tag/v0.4.42). It provides tested CPU and accelerated binaries for Linux, Windows, and Apple Silicon macOS. Recent releases also added deterministic ONNX Runtime accelerator selection, CUDA runtime packaging, CoreML support, and opt-in DirectML, OpenVINO, TensorRT, and vendor NPU providers.

See the documentation for:

- [Installation](https://anylabeling.nrl.ai/docs/installation)
- [Hardware acceleration](https://anylabeling.nrl.ai/docs/gpu)
- [Recent releases](https://anylabeling.nrl.ai/docs/releases)
- [Loading custom models](https://anylabeling.nrl.ai/docs/custom-models)

The application source, issue tracker, and binary releases are in [vietanhdev/anylabeling](https://github.com/vietanhdev/anylabeling).

## Develop this site

```bash
pnpm install --frozen-lockfile
pnpm build
```

Use `pnpm dev` for a local development server.
