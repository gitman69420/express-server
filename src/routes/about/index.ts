import { Request, Response, Router } from "express";
import getAboutInformation from "@src/services/about";
import logger from "@src/middleware/logger";

const router = Router();

router.use(logger);
router.get(`/`, async (_req: Request, res: Response) => {
    try {
        const aboutInformation = await getAboutInformation();
        res.send(aboutInformation);
    } catch {
        res.sendStatus(500);
    }
})

export default router;