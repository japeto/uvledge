from urllib.request import Request
from django.db import IntegrityError
from rest_framework import viewsets

from .serializer import ParticipantSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from .models import Participant
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

class ParticipantViewSet(viewsets.ModelViewSet):

    model = Participant
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()

    http_method_names = ['post', 'get']
    
    @action(detail=False, methods=['post'])
    def save(this, request: Request) -> Response:
        """
            For user with id=pk Update his attributes.
        """
        try:
            participantExist: bool = Participant.objects.filter(Id=request.data['id']).exists() 
            if(participantExist):
              return Response("User already exist", status=status.HTTP_409_CONFLICT)

            password: str = request.data['password']
            email: str = request.data['email']
            fullName: str = request.data['fullName']
            id: str = request.data['id']
            studentCode: str = request.data['studentCode']
            idType: str = request.data['idType']

            user: User = User.objects.create_user(password=password, username=id)
            participant: Participant = Participant(Auth=user, Password=password, Id=id, StudentCode=studentCode, Email=email, IdType=idType, FullName=fullName)
            
            participant.save()

            return Response("User " + str(user.id) + " updated", status=status.HTTP_200_OK)
        except KeyError:
            return Response("Invalid Content", status.HTTP_400_BAD_REQUEST)
        except IntegrityError as e:
            return Response("ID, Email or student code is duplicated", status.HTTP_400_BAD_REQUEST)
        except:
            return Response("Internal error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    @action(detail=False, methods=["post"])
    def login(self, request: Request) -> Response:
        try:
            id:str = request.data['id']
            password:str = request.data['password']
            
            user: User = authenticate(request=request, username=id, password=password)
            if(user is None):
                return Response("invalid username or password", status=status.HTTP_404_NOT_FOUND)

            login(request, user)
            print(request.user)
            
            return Response("User exist", status=status.HTTP_200_OK)
        except KeyError:
            return Response("Invalid Content", status.HTTP_400_BAD_REQUEST)
        except:
            return Response("Internal error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
    @action(detail=False, methods=["get"])
    def is_logged(self, request: Request) -> Response:
        # try:
            if request.user.is_authenticated:
                return Response({"logged": True}, status=status.HTTP_200_OK)
            print(request.user)
            return Response({"logged": False}, status=status.HTTP_200_OK)
        # except:
        #     return Response("Internal error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            
            