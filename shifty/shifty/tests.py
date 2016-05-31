import datetime
import json
from shifty.models import ShiftUser as User
from django.test import TestCase
from tastypie.test import ResourceTestCaseMixin


class UserResourceTest(ResourceTestCaseMixin, TestCase):

    def setUp(self):
        super(UserResourceTest, self).setUp()

        self.access_token_fake = 'safewfvevfwevweev342342352423423edfdsvfweevffweecweEAAQPwlw8sg4BAGAPFXLIkKSK8jySQbtR9gObj'

        # This new long-lived access token will expire on 5. srpnja 2016
        self.access_token_facebook = 'EAAQPwlw8sg4BAJ3iVXoJetr68ZCd4fTfqY9sedOCQF2ZCCfAZB4I8A3xcxU48NS79OxiI7M9JmZBCjLHbtBvEhRaf9FnEtR6ivbGugZCotd2rnYKbZBlE4QZBDW0SySZBVMnZCCZCjG7mpDiNX03MccaYx0gFQ2w9nzZB0ZD'

        self.auth_url = '/api/v1/user/?'

        self.test_email = 'hrc6fejs@gmail.com'


    def test_auth(self):
        response = self.api_client.get(self.auth_url + 'provider=facebook' + '&access_token=' + self.access_token_facebook + '&email=' + self.test_email, format='json')
        self.assertValidJSON(json.dumps(response.content))
        self.assertEqual(response.status_code, 200)

    def test_user_created(self):
        response = self.api_client.get(self.auth_url + 'provider=facebook' + '&access_token=' + self.access_token_facebook + '&email=' + self.test_email)
        self.assertEqual(User.objects.count(), 1)

    def test_invalid_token(self):
        response = self.api_client.get(self.auth_url + 'provider=facebook' + '&access_token=' + self.access_token_fake + '&email=' + self.test_email, format='json')
        self.assertValidJSON(json.dumps(response.content))
        self.assertEqual(json.loads(response.content)["error"], 'Invalid access token!')
        self.assertHttpUnauthorized(response)

    def test_invalid_provider(self):
        response = self.api_client.get(self.auth_url + 'provider=twitter' + '&access_token=' + self.access_token_facebook + '&email=' + self.test_email, format='json')
        self.assertValidJSON(json.dumps(response.content))
        self.assertEqual(json.loads(response.content)["error"], 'Invalid backend!')
        self.assertHttpUnauthorized(response)

    def test_invalid_email(self):
        response = self.api_client.get(self.auth_url + 'provider=twitter' + '&access_token=' + self.access_token_facebook + '&email=dsfcevf334@', format='json')
        self.assertValidJSON(json.dumps(response.content))
        self.assertEqual(json.loads(response.content)["error"], 'Invalid email!')
        self.assertHttpUnauthorized(response)

    def test_not_provided_auth_data(self):
        response = self.api_client.get(self.auth_url, format='json')
        self.assertEqual(response.status_code, 400)

    def test_provided_auth_empty_data(self):
        response = self.api_client.get(self.auth_url + 'provider=' + '&access_token=' + self.access_token_facebook + '&email=' + self.test_email, format='json')
        self.assertEqual(response.status_code, 400)
        response = self.api_client.get(self.auth_url + 'provider=facebook' + '&access_token=' + '&email=' + self.test_email, format='json')
        self.assertEqual(response.status_code, 400)
        response = self.api_client.get(self.auth_url + 'provider=twitter' + '&access_token=' + self.access_token_facebook + '&email=', format='json')
        self.assertEqual(response.status_code, 400)
