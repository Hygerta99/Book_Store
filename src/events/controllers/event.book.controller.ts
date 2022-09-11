import {Request, Response} from "express";
import {EventBookService} from "../services/event.book.service";

export class EventBookController {
    public static getEventBooks = async (request: Request, response: Response) => {
        try {
            const [eventBooks, total] = await EventBookService.getEventBooks(request);
            return response.send({ eventBooks, total })
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    public static insertEventBooks = async (request: Request, response: Response) => {
        try {
            const book = await EventBookService.insertEventBooks(request);
            return response.status(200).send({ message: 'Success', book });
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }


    public static deleteEventBook = async (request: Request, response: Response) => {
        try {
            await EventBookService.deleteEventBook(request,response);
            return response.send({ status: 204, message: `EventBook deleted successfully`})
        } catch (e) {
            console.log(e)
            return response.send({ status: 500, message: `Server error`});
        }
    }

    // public static updateProject = async (request: Request, response: Response) => {
    //     const userId = +request.params.userId;
    //
    //     try {
    //         if (!userId) {
    //             return response.send({ status: 400, message: 'userId is not provided'});
    //         } else {
    //             const repository = getRepository(UserEntity);
    //             const user = await repository.findOne({ id: userId });
    //             const savedRes = await repository.merge(user, request.body);
    //             await repository.save(savedRes);
    //             return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
    //
    // public static deleteProject = async (request: Request, response: Response) => {
    //     try {
    //         const userId = +request.params.userId;
    //         const repository = getRepository(UserEntity);
    //
    //         await repository.delete({ id: userId })
    //         return response.send({ status: 200, message: 'Success'})
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
    //
    // public static updateDescription = async (request: Request, response: Response) => {
    //     try {
    //         const userId = +request.params.userId;
    //         const username = request.body.username;
    //
    //         if (!userId) {
    //             return response.send({ status: 400, message: 'userId is not provided'});
    //         } else {
    //             const repository = getRepository(UserEntity);
    //             const user = await repository.findOne({ id: userId });
    //             if (!user) {
    //                 return response.send({ status: 404, message: `User with id ${userId} not found`});
    //             } else {
    //                 user.username = username;
    //                 await repository.save(user);
    //                 return response.send({ status: 200, message: `User with id ${userId} saved successfully`});
    //             }
    //         }
    //
    //     } catch (error) {
    //         console.log(error)
    //         return response.send({ status: 500, message: `Server error`});
    //     }
    // }
}